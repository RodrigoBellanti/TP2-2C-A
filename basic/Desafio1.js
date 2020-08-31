const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

// obtener el total de segundos de todos los videos del tipo 'Redux Video'
// pistas: convertirlo en objetos
// Vale por el primer parcial
// Fecha de entrega: Domingo 30 AGO 23:59
// Fecha de solucio: Miercoles 2 de SEP

// Modalidad de entrega. Pull Request.

const busqueda = 'Redux Video'
const arr = str.split('\n')
const videos = arr.map(v => ({tipo:v.substr(v.indexOf('>')+1,v.lastIndexOf('<')-v.indexOf('>')-1), duracion:v.substr(v.indexOf('"')+1,v.lastIndexOf('"')-v.indexOf('"')-1)}))

const calcularTiempo = function(videos){
  let minutos = 0;
  let segundos = 0;
  videos.forEach(video => {
    if(video.tipo === busqueda){
      let minSeg = video.duracion.split(":");
      minutos += parseInt(minSeg[0])
      segundos += parseInt(minSeg[1])
    }
  });
  let tiempoTotal = segundos + (minutos*60);
  console.log(`La suma total de las duraciones de los ${busqueda} es de: ${tiempoTotal}`);
}

calcularTiempo(videos)




