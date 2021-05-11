/**
 * Sudoku
 */
public class Sudoku {
public static int[][] griglia=new int[9][9];
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
        System.out.println("entro in costruisciGriglia");//debug
        int questoQuadrato=generaRandom();
        for (int i=0; i<griglia.length; i++){
            for (int j=0; j<griglia[0].length; j++){
                //while (!(verifica(i, j, questoQuadrato))) {
                    questoQuadrato=generaRandom();
                    //System.out.println("in costruisciGriglia, ciclo while di verifica; numrandom"+questoQuadrato);//debug
                //}     
                griglia[i][j]=questoQuadrato;
                System.out.println("in costruisciGriglia,esco ciclo while di verifica e do valore "+questoQuadrato);  //debug                

            }
        }
    } 
    private static boolean verifica(int riga, int colonna, int questoQuadrato) {
        if (verificaRiga(riga, colonna, questoQuadrato)){
            if (verificaColonna(riga, colonna, questoQuadrato)){
                if (verificaQuadrante(riga, colonna, questoQuadrato)) {
                    return true;
                }
            }
        }
        return false;
    }

    //todo bool verifica riga
    private static boolean verificaRiga(int riga, int colonna, int questoQuadrato) {
        for (int i=0; i<griglia.length; i++){
            if (questoQuadrato==griglia[riga][i]){
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
    