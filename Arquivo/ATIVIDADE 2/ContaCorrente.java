package ATIVIDADE 2;


public class ContaCorrente extends ContaBancaria implements Imprimivel {
    private double taxaDeOperacao;

    public ContaCorrente() {
        super();
    }

    public double getTaxaDeOperacao() {
        return taxaDeOperacao;
    }

    public void setTaxaDeOperacao(double taxaDeOperacao) {
        this.taxaDeOperacao = taxaDeOperacao;
    }

    @Override
    public void mostrarDados() {
        System.out.println("=== Conta Corrente ===");
        System.out.println("Número da Conta: " + getNumeroConta());
        System.out.println("Saldo: R$ " + getSaldo());
        System.out.println("Taxa de Operação: R$ " + this.taxaDeOperacao);
    }
}