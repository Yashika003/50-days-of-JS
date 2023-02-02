//function to transcribe dna to rna
//A->U
//T->A
//C->G
//G->c
//input ('ATCG')
//output ('UAGC')
function transcription(dna)
{
	var rna = '';
    for (i=0; i<dna.length; i++)
    {
        if(dna[i]=='A') rna+='U';
        else if(dna[i]=='T') rna+='A';
        else if(dna[i]=='C') rna+='G';
        else rna+='C';
    }
    return rna;
}
