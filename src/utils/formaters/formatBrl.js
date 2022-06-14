export const formatBrl = (brl) => {
    if(!brl) {
       return 'R$ -'; 
    }
    brl = parseInt(brl); 
    
    return `R$ ${brl.toLocaleString('pt-BR',{minimumFractionDigits: 2})}`;
}