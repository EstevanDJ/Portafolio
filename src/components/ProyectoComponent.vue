<template>
    <main>
        <div>
            <header>
                <section class="color"></section>
            </header>
        </div>
        <div>
            <p class="proyect"> <strong>Proyecto</strong></p>
        </div>
        <div>
            <header class="flex-box">
                <section class="proyecto">
                    <h1>SINTAPUJOS</h1>
                </section>
                <section class="descripcion">
                    <div>
                        <p  class="text">Es el proyecto que estamos realizando en con aprendices SENA en conjunto al lider de ficha</p>
                    </div>
                </section>
            </header>
        </div>
        <div>
        <footer>
            <p class="llama">Llama
                +57 3143268481
            </p>
            <p class="correo">Escribe joseibarra1@misena.edu.co</p>
        </footer>
    </div>
    </main>
</template>

<script>
export default{
    name:'ProyectoComponent',
    data(){
    }
}
</script>

<style scoped>
.proyect{
    font-family: Verdana, Geneva, Tahoma, sans-serif     ;
    position: absolute;
    top: 200px;
    left: 400px;
    color: black;
}
.color{
background-color: antiquewhite;
width: 100%;
height: 600px;
}

.flex-box{
    display: flex;
    margin: auto;
    border: 1px solid black;
    width: 50%;
    height: 200px;
    background-color: rgb(255, 255, 255);

    position: absolute;
    top: 300px;
    left: 400px;

    box-shadow: 10px 10px 13px gray;
}
.proyecto{
    width: 50%;
    margin: auto;
    color: blue;
}
.descripcion{ 
    width: 50%;
    margin: auto;
}
.text {
    font-size: medium;
    text-align: left;
}
footer{
    display: flex;
    position: absolute;
    left: 1000px;
}
.llama{
    display: inline-block;
    padding: 10px;
    
}
.correo{
    display: inline-block;
    padding: 10px;
}
</style>