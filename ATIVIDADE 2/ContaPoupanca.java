package ATIVIDADE 2;

public class ContaPoupanca extends ContaBancaria implements Imprimivel {
    private double limite;

    public ContaPoupanca() {
        super();
    }

    public double getLimite() {
        return limite;
    }

    public void setLimite(double limite) {
        this.limite = limite;
    }

    @Override
    public void mostrarDados() {
        System.out.println("=== Conta Poupança ===");
        System.out.println("Número da Conta: " + getNumeroConta());
        System.out.println("Saldo: R$ " + getSaldo());
        System.out.println("Limite: R$ " + this.limite);
    }
}