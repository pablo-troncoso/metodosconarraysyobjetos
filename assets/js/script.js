document.write('<p>Estadisticas centro medico ñuñoa</p>');

const radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

const traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];
// Ejercicio 1 Agregar horas al Arreglo de Traumatología
traumatologia.push(
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'}
);

const dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

// Ejercicio 2 Eliminar el Primer SHIFT y Último Elemento POP del Arreglo de Radiología

radiologia.shift(); 
radiologia.pop();   

// Ejercicio 3 Imprimir en la página HTML con document.write
document.write('<h2>Consultas Médicas Dental:</h2>'); 
for (let i = 0; i < dental.length; i++) {
    let consulta = dental[i];
    document.write(`<p>${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}</p>`);
}

// Ejercicio 4 Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. 
let pacientesTotales = [];

pacientesTotales = pacientesTotales.concat(radiologia.map(consulta => consulta.paciente));
pacientesTotales = pacientesTotales.concat(traumatologia.map(consulta => consulta.paciente));
pacientesTotales = pacientesTotales.concat(dental.map(consulta => consulta.paciente));

document.write('<h2>Lista de todos los Pacientes Atendidos:</h2>');
pacientesTotales.forEach(paciente => {
    document.write(`<p>${paciente}</p>`);
});

//Ejercicio 5 Pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental
document.write('<h2>Pacientes de ISAPRE en la lista de Dental</h2>');

const pacientesIsapreDental = dental.filter(consulta => consulta.prevision === 'ISAPRE');
pacientesIsapreDental.forEach(consulta => {
    document.write(`<p>${consulta.paciente} - ${consulta.prevision}</p>`);
});

// Ejercicio 6 Filtrar Pacientes de FONASA en la lista de Traumatología
document.write('<h2>Pacientes de FONASA en la lista de Traumatología</h2>');

const pacientesFonasaTraumatologia = traumatologia.filter(consulta => consulta.prevision === 'FONASA');
pacientesFonasaTraumatologia.forEach(consulta => {
    document.write(`<p>${consulta.paciente} - ${consulta.prevision}</p>`);
});



let pacientesRadiologia = obtenerListaPacientes(radiologia);
let pacientesTraumatologia = obtenerListaPacientes(traumatologia);
let pacientesDental = obtenerListaPacientes(dental);

let pacientesTotal = pacientesRadiologia.concat(pacientesTraumatologia, pacientesDental);

document.write('<h2>Listado de Pacientes Atendidos:</h2>'); 
pacientesTotal.forEach(paciente => {
    document.write(`<p>${paciente}</p>`);
});

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);

document.write(`<p>Primera atención Radiología: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención Radiología: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atención Traumatología: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención Traumatología: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atención Dental: ${dental[0].paciente} - ${dental[0].prevision} | Última atención Dental: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);



