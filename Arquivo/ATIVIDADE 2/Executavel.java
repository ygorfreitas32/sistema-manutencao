package ATIVIDADE 2;


public class Executavel {

    public Executavel() {
    }

    public static void main(String[] args) {
        ContaCorrente cc = new ContaCorrente();
        cc.setNumeroConta(1001);
        cc.depositar(2500.0);
        cc.setTaxaDeOperacao(15.50);

        ContaPoupanca cp = new ContaPoupanca();
        cp.setNumeroConta(2002);
        cp.depositar(5000.0);
        cp.setLimite(1000.0);

        Relatorio relatorio = new Relatorio();
        relatorio.gerarRelatorio(cc);
        System.out.println();
        relatorio.gerarRelatorio(cp);
    }
}