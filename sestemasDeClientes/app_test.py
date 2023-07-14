from flask import Flask,render_template
app = Flask(__name__)

@app.route('index.html')
def index():
#  return "<h1>Hola Codo a Codo!</h1> <p>Todo a salido bien.</p><p>Chau</p>"
    return render_template('index.html')

if __name__=='__main__':
 app.run(debug=True)