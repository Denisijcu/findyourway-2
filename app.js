    // Define de UI

    const lab = document.querySelector('#lab');
    const cors = document.querySelector('#cors');
    const btn = document.querySelector('.btn');

    const matriz = new Array(10, 11);
    matriz[0] = ["S", 1, 0, 0, 0, 0, 0, 0, 0, 0];
    matriz[1] = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    matriz[2] = [0, 1, 1, 0, 0, 0, 1, 1, 1, 0];
    matriz[3] = [0, 0, 1, 1, 0, 0, 1, 0, 1, 0];
    matriz[4] = [0, 0, 0, 1, 1, 1, 1, 0, 1, 0];
    matriz[5] = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    matriz[6] = [0, 0, 1, 1, 1, 1, 0, 0, 1, 1];
    matriz[7] = [1, 1, 1, 0, 0, 1, 0, 0, 0, 1];
    matriz[8] = [1, 0, 0, 0, 0, 1, 1, 1, 1, 1];
    matriz[9] = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0];
    matriz[10] = [0, 0, 0, 1, 1, 1, 1, 1, 1, "E"];
    let s = '';
    let c = 0;
    let myclass = '';
    let coorXY = [];

    function start(status) {
      // clean the coors table
      coorXY.splice(0, coorXY.length);
      if (btn.textContent === 'Init') {
        status = false;
      }
      s = '';
      for (let i = 0; i < matriz.length; i++) {
        s += '<tr>'
        for (let j = 0; j < matriz.length - 1; j++) {

          if (status) {
            // myclass = (matriz[i][j] === 1) ? 'green' : 'black';
            btn.textContent = 'Init'
            btn.style.backgroundColor = 'green';
            btn.style.color = 'white';

            if (matriz[i][j] === 1 || matriz[i][j] === 'S' || matriz[i][j] === 'E') {
              coorsXY(j, i);
              myclass = 'red';
            } else {
              myclass = 'green';
            }

          } else {
            btn.textContent = 'Start';
            btn.style.backgroundColor = 'red';
            btn.style.color = 'white';

            myclass = 'green';
          }
          s += `<td class= '${myclass}'> ${matriz[i][j]} </td>`;
          c++;
          if (c === 10) {
            s += '</tr>';
            c = 0;
            break;
          }
        }
      }
      var data = `
      <table style="width:50%">` + s +
        `</table>
    <br />
    `;
      lab.innerHTML = data;
      // Creating the coors 
      var t = '';
      coorXY.forEach(c => {

        t += `<tr><td class= 'tableCoors'>${c.x}</td><td class= 'tableCoors'>${c.y}</td></tr>`;
      });
      if (!status) {
        t = '';
      }
      var tableCoors = `<h2>COORS </h2><table style="width:50%"> <th> X </th> <th> Y </th>` +
        t + `</table>
      
        `;
      cors.innerHTML = tableCoors;
    }
    // function to create the coors
    function coorsXY(x, y) {
      let obj = {
        x: x,
        y: y
      };
      coorXY.push(obj);
    }
    window.addEventListener("load", start(false), false);