const express = require('express')
const app = express();
const cors = require('cors')




app.set('port', 3333)
app.use(cors())
app.use(express.json())


app.use('/', require('./src/routes'));
/*outra coisa*/

require('./src/database/index');

app.listen(app.get('port'), ()=>{
        console.log("Aplicação inciada na porta: " + app.get('port'))
})