/**
 * Sudoku
 */
public class Sudoku {
public static int[][] griglia=new int[9][9];
private static boolean[] contatoreValori= {false, false, false, false, false, false, false, false, false};
private static int loading=0;
public static void main(String[] args) {
    costruisciGriglia();
    for(int i=0; i<griglia.length; ++i){
        System.out.println();
        for(int j=0; i<griglia[0].length; ++i){
            System.out.print("|\t"+griglia[i][j]+"\t |");
        }
        
    }
}
    // metodo generarandom 
    private static int generaRandom(){
        return 1+(int)(java.lang.Math.random()*9);
    }
    //todo costruisciGriglia()
    public static void costruisciGriglia() {
        //System.out.println("entro in costruisciGriglia");//debug
        int questoQuadrato=generaRandom();
        for (int i=0; i<griglia.length; i++){
            for (int j=0; j<griglia[0].length; j++){
                while (!(verifica(i, j, questoQuadrato))) {
                    addToContatore(questoQuadrato);
                    questoQuadrato=generaRandom();
                    if (checkContatore()){
                        azzeraContatore();
                        //System.out.println("in costruisciGriglia, checkContatore is true; riga: "+i+" colonna: "+j);//debug
                        if (i>1){
                            //System.out.println("in costruisciGriglia, i>1 is true; prima di operazione riga: "+i+" colonna: "+j);//debug
                            i= i-1;
                            //System.out.println("in costruisciGriglia, i>1 is true; dopo operazione riga: "+i+" colonna: "+j);//debug
                        } else { 
                            if(j>1){
                            //System.out.println("in costruisciGriglia, j>1 is true; riga: "+i+" prima di operazione colonna: "+j);//debug
                            j= j-1;
                            //System.out.println("in costruisciGriglia, j>1 is true; riga: "+i+" dopo operazione colonna: "+j);//debug
                            } else {
                                costruisciGriglia();
                            }
                        }
                    }
                    //System.out.println("in costruisciGriglia, ciclo while di verifica; numrandom"+questoQuadrato);//debug
                }     
                azzeraContatore();
                griglia[i][j]=questoQuadrato;
                //System.out.println("VERIFICATA RIGA,sono uscito!! e \tdo valore "+questoQuadrato);  //debug    
                loading=loading+10;
                System.out.println("Sto generando, per favore, attendi \tLOADING: "+loading+"%");  //LOADING             

            }
        }
    } 
    
    private static void azzeraContatore() {
        for (int i=0; i<contatoreValori.length; i++){
            contatoreValori[i]=false;
        }
    }
    private static void addToContatore(int questoQuadrato) { //segna al contatore questoQuadrato come true
        contatoreValori[questoQuadrato-1]=true;
    }
    private static boolean checkContatore() { //return true se sono passati tutti i num da 1 a 9
        int contatore=0;
        for (int i=0; i<contatoreValori.length; i++) {
            if (contatoreValori[i]==true){
                contatore++;
            } else { //if false
                return false;
            }
        }
    //    if (contatore==9)
        return true;
    }
    private static boolean verifica(int riga, int colonna, int questoQuadrato) { //return false se il num si ripete, altrimenti true
        if (verificaRiga(riga, colonna, questoQuadrato)){
            if (verificaColonna(riga, colonna, questoQuadrato)){
                //if (verificaQuadrante(riga, colonna, questoQuadrato)) {
                    return true;
                //}
            }
        }
        return false;
    }

    //todo bool verifica riga
    private static boolean verificaRiga(int riga, int colonna, int questoQuadrato) {
        //System.out.println(riga+" riga "+colonna+" colonna "+questoQuadrato+"questo quadrato");//debug
        //System.out.println("Stampo "+riga+" riga "+"x colonna "+questoQuadrato+"questo quadrato");//debug
        for (int i=0; i<griglia.length; i++){
            if (questoQuadrato==griglia[riga][i]){
                //System.out.print(""+riga+" riga "+i+" colonna "+questoQuadrato+"questo quadrato "+griglia[riga][i]+"elemento griglia");//debug
                return false;
            }
        }
        return true;
    }
    //todo bool verifica colonna
    private static boolean verificaColonna(int riga, int colonna, int questoQuadrato) {
        for (int i=0; i<griglia.length; i++){
            if (questoQuadrato==griglia[i][colonna]){
                return false;
            }
        }
        return true;

    }
    //todo bool verifica quadrante
    private static boolean verificaQuadrante(int riga, int colonna, int questoQuadrato) {
        int quadrante = selezioneQuadrante(riga, colonna);
        if(quadrante ==0){
            System.out.println("errore: quadrante 0");
        }
        return verificaQuadNum(questoQuadrato, quadrante);
    }
    private static int selezioneQuadrante(int riga, int colonna) {
        int quadrante=0;
        if ((riga<9)&&(colonna<9)) {
            quadrante=9;
            if (colonna<6){
                quadrante=8;
                if (colonna<3){
                    quadrante=7;
                }
            }
            if ((riga<6)){ 
                quadrante=6;
                if (colonna<6){
                    quadrante=5;
                    if (colonna<3){
                        quadrante=4;
                    }
                }
                if(riga<3){
                    quadrante=3;
                    if (colonna<6){
                        quadrante=2;
                        if (colonna<3){
                            quadrante=1;
                        }
                    }
                }
            }


            
        }
        return quadrante;
    }
    
    private static boolean verificaQuadNum(int questoQuadrato, int quadrante){
        if (quadrante==1){
            for (int i=0; i<3; i++){
                for (int j=0; j<3; j++){
                    if (questoQuadrato==griglia[i][j]){
                        return false;
                    }
                }
            }
        }
        if (quadrante==2){
            for (int i=0; i<3; i++){
                for (int j=3; j<6; j++){
                    if (questoQuadrato==griglia[i][j]){
                        return false;
                    }
                }
            }
        }
        if (quadrante==3){
            for (int i=0; i<3; i++){
                for (int j=6; j<9; j++){
                    if (questoQuadrato==griglia[i][j]){
                        return false;
                    }
                }
            }
        }
        if (quadrante==4){
            for (int i=3; i<6; i++){
                for (int j=0; j<3; j++){
                    if (questoQuadrato==griglia[i][j]){
                        return false;
                    }
                }
            }
        }
        if (quadrante==5){
            for (int i=3; i<6; i++){
                for (int j=3; j<6; j++){
                    if (questoQuadrato==griglia[i][j]){
                        return false;
                    }
                }
            }
        }
        if (quadrante==6){
            for (int i=3; i<6; i++){
                for (int j=6; j<9; j++){
                    if (questoQuadrato==griglia[i][j]){
                        return false;
                    }
                }
            }
        }
        if (quadrante==7){
            for (int i=6; i<9; i++){
                for (int j=0; j<3; j++){
                    if (questoQuadrato==griglia[i][j]){
                        return false;
                    }
                }
            }
        }
        if (quadrante==8){
            for (int i=6; i<9; i++){
                for (int j=3; j<6; j++){
                    if (questoQuadrato==griglia[i][j]){
                        return false;
                    }
                }
            }
        }
        if (quadrante==9){
            for (int i=6; i<9; i++){
                for (int j=6; j<9; j++){
                    if (questoQuadrato==griglia[i][j]){
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
    