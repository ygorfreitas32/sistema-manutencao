create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  role text not null default 'tecnico' check (role in ('administrador', 'analista', 'tecnico')),
  created_at timestamptz not null default now()
);

create table if not exists public.assets (
  id uuid primary key default gen_random_uuid(),
  tag text not null unique,
  location text not null,
  discipline text not null check (discipline in ('Mecânica', 'Elétrica', 'Calibração')),
  calibration_required boolean not null default false,
  category text not null,
  invoice_value numeric(12, 2) not null default 0 check (invoice_value >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.maintenance_plans (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  discipline text not null check (discipline in ('Mecânica', 'Elétrica', 'Calibração')),
  asset_id uuid references public.assets(id) on delete set null,
  planned_date date not null,
  status text not null default 'Pendente' check (status in ('Pendente', 'Atrasado', 'Concluído')),
  created_at timestamptz not null default now()
);

create table if not exists public.maintenance_notes (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('Corretiva Mecânica', 'Corretiva Elétrica', 'Corretiva Calibração', 'Programada Mecânica', 'Programada Calibração', 'Programada Elétrica')),
  priority text not null check (priority in ('Muito urgente', 'Urgente', 'Pode esperar', 'Programada')),
  equipment text not null,
  failure text not null,
  possible_solution text not null,
  requester_id uuid not null references public.profiles(id),
  status text not null default 'Aberta' check (status in ('Aberta', 'Concluída')),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists public.audit_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity text not null,
  entity_id uuid,
  detail text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.assets enable row level security;
alter table public.maintenance_plans enable row level security;
alter table public.maintenance_notes enable row level security;
alter table public.audit_log enable row level security;

create policy "Authenticated users can read profiles"
  on public.profiles for select to authenticated using (true);

create policy "Users can read assets"
  on public.assets for select to authenticated using (true);

create policy "Analysts can manage assets"
  on public.assets for all to authenticated
  using ((select role from public.profiles where id = auth.uid()) in ('administrador', 'analista'))
  with check ((select role from public.profiles where id = auth.uid()) in ('administrador', 'analista'));

create policy "Authenticated users can read plans"
  on public.maintenance_plans for select to authenticated using (true);

create policy "Analysts can manage plans"
  on public.maintenance_plans for all to authenticated
  using ((select role from public.profiles where id = auth.uid()) in ('administrador', 'analista'))
  with check ((select role from public.profiles where id = auth.uid()) in ('administrador', 'analista'));

create policy "Authenticated users can read notes"
  on public.maintenance_notes for select to authenticated using (true);

create policy "Authenticated users can open notes"
  on public.maintenance_notes for insert to authenticated
  with check (requester_id = auth.uid());

create policy "Analysts can update notes"
  on public.maintenance_notes for update to authenticated
  using ((select role from public.profiles where id = auth.uid()) in ('administrador', 'analista'))
  with check ((select role from public.profiles where id = auth.uid()) in ('administrador', 'analista'));

create policy "Administrators can delete notes"
  on public.maintenance_notes for delete to authenticated
  using ((select role from public.profiles where id = auth.uid()) = 'administrador');

create policy "Authenticated users can read audit log"
  on public.audit_log for select to authenticated using (true);

create policy "Authenticated users can write audit log"
  on public.audit_log for insert to authenticated
  with check (user_id = auth.uid());