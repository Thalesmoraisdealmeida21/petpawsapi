const express = require('express')
const app = express();
const cors = require('cors')




app.set('port', 3333)
app.use(cors())
app.use(express.json())


app.use('/', require('./src/routes'));
<<<<<<< HEAD
/*outra coisa*/
=======
/*resteasdwasdas*/
    
>>>>>>> a24c5996c3019c1ae1a47d3ebc0ff466443d742c

require('./src/database/index');

app.listen(app.get('port'), ()=>{
        console.log("Aplicação inciada na porta: " + app.get('port'))
})
