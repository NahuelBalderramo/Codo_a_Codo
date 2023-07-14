from flask import Flask,render_template,request, redirect
# Importamos el módulo que permite conectarnos a la BS


from flaskext.mysql import MySQL
#--------------------------------------------------------------------
# Creamos la aplicación
app=Flask(__name__)
#--------------------------------------------------------------------
# Creamos la conexión con la base de datos:
mysql = MySQL()
# Creamos la referencia al host, para que se conecte a la base
# de datos MYSQL utilizamos el host localhost
app.config['MYSQL_DATABASE_HOST']='localhost'
# Indicamos el usuario, por defecto es user
app.config['MYSQL_DATABASE_USER']='root'
# Sin contraseña, se puede omitir
app.config['MYSQL_DATABASE_PASSWORD']=''
# Nombre de nuestra BD
app.config['MYSQL_DATABASE_BD']='sistemaDeClientes'
# Creamos la conexión con los datos
mysql.init_app(app) 

@app.route('/')
def index():

 # Devolvemos código HTML para ser renderizado
 return render_template('/index.html')


@app.route('/Registrarse.html')
def create():
 return render_template('/Registrarse.html')


@app.route('/store', methods=['POST'])
def storage():
 # Recibimos los valores del formulario y los pasamos a variables locales:
 _ObtenerNombre = request.form['ObtenerNombre']
 _ObtenerApellido = request.form['ObtenerApellido']
 _Email = request.form['Email']
 _Celular= request.form['Celular']

 # Y armamos una tupla con esos valores:
 datos = (_ObtenerNombre,_ObtenerApellido,_Email,_Celular,)


 sql = "INSERT INTO `clientes` (`Nombre`, `Apellido`, `Email`, `Celular`) VALUES ('Nahuel', 'Balderramo', 'nahue@gmail.com', '2645876');"
 conn = mysql.connect() 
 cursor = conn.cursor() 
 cursor.execute(sql, datos) 
 conn.commit() 
 return render_template('/index.html') 



if __name__=='__main__':
 app.run(debug=True)