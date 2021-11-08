(function(){        
var actualizarHora  = function(){
var         fecha       = new Date;
            horas       = fecha.getHours(),
            ampm;
            minutos     = fecha.getMinutes(),
            segundos    = fecha.getSeconds(),
            diaSemana   = fecha.getDay(),
            dia         = fecha.getDate(),
            mes         = fecha.getMonth(),
            year        = fecha.getFullYear();
    //console.log(horas, minutos, segundos, diaSemana, mes, year);
        //paraghraps
    var     pHoras      = document.getElementById("horas");
            pAMPM       = document.getElementById("ampm");
            pMinutos    = document.getElementById("minutos");
            pSegundos   = document.getElementById("segundos");
            pDia        = document.getElementById("dia");
            pDiaSemana  = document.getElementById("diaSemana"),            paMes       = document.getElementById("mes");
            pYear       = document.getElementById("year");
    //console.log(paraHora, paraMinutos, paraSegundos, paradDiaSeman, ParaMes, paraYear);
        //arreglos
            semana    = ["dom","lun","mar","mie","jue","vie","sab"];
            meses     = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
        //consdicional
    if(horas >= 12){
        horas   = horas - 12;
        ampm    = "PM";
    }else{
        ampm    = "AM";
    }
    if(horas    == 0){
        horas   = 12;
    }

    pDiaSemana.textContent  = semana[diaSemana];
    paMes.textContent       = meses[mes];
    pDia.textContent        = dia;
    pDiaSemana              = diaSemana;
    pYear.textContent       = year;
    pHoras.textContent      = horas;    
if(minutos < 10){minutos    = "0" + minutos};
if(segundos < 10){segundos  = "0" + segundos};
    pMinutos.textContent    = minutos;
    pSegundos.textContent   = segundos;
    pAMPM.textContent       = ampm;
};
actualizarHora();
var refresco                = setInterval(actualizarHora, 1000);
}())    