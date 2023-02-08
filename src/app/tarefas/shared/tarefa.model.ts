export class Tarefa {

  constructor(
    public id?: string,
    public nomeTarefa?: string,
    public concluida?: boolean,
    public colaboradorId?: string,
    public nomeColaborador?: string) { }
}
