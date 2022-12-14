<template>
    <main>
        <div>
            <header>
                <section class="color">
                </section>
            </header>
        </div>
        <div>
            <p class="estudio"><strong>Educacion</strong></p>
            <header class="flex-box">
                <section class="año">
                    <h1>2010 - 2018</h1>
                </section>
                <section class="texto">
                    <div>
                        <p class="contenedor">Termine mis estudios basica secundaria en la institucion educativa Agropecuario Santa Maria</p>
                    </div>
                </section>
            </header>
        </div>
        <div>
            <header class="flex-box1">
                <section class="año1">
                    <h1>30 - Ago - 2019</h1>
                </section>
                <section class="texto1">
                    <div>
                        <p class="contenedor1">Curso especial en emprendedor en instalacion de redes electricas para edificaciones rurales SENA</p>
                    </div>
                </section>
            </header>
        </div>
        <div>
            <header class="flex-box2">
                <section class="año2">
                    <h1>23 - Nov - 2019</h1>
                </section>
                <section class="texto2">
                    <div>
                        <p class="contenedor2">Curso especial en diseño y montaje de sitemas solares foto voltaicos basicos SENA</p>
                    </div>
                </section>
            </header>
        </div>
        <div>
            <header class="flex-box3">
                <section class="año3">
                    <h1>06 - Jul - 2022</h1>
                </section>
                <section class="texto3">
                    <div>
                        <p class="contenedor3">Curso especial en aplicacion de la metodologia SCRUM para proyectos de desarrollo de sofware SENA</p>
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
    name: 'CurriculumComponent',
    data(){
    }
}
</script>

<style scoped>
.color{
background-color: antiquewhite;
width: 100%;
height: 1150px;
}
.estudio{
    font-family: Verdana, Geneva, Tahoma, sans-serif     ;
    position: absolute;
    top: 200px;
    left: 400px;
    color: black;
}
.flex-box{
    display: flex;
    margin: auto;
    border: 1px solid black;
    width: 50%;
    height: 200px;
    background-color: rgb(255, 255, 255);

    position: absolute;
    top: 250px;
    left: 400px;

    box-shadow: 10px 10px 13px gray;
}
.año{
    width: 50%;
    margin: auto;
    color: blue;
}
.texto{ 
    width: 50%;
    margin: auto;
}
.contenedor{
    font-size: medium;
    text-align: left;
}
.flex-box1{
    display: flex;
    margin: auto;
    border: 1px solid black;
    width: 50%;
    height: 200px;
    background-color: rgb(255, 255, 255);

    position: absolute;
    top: 510px;
    left: 400px;

    box-shadow: 10px 10px 13px gray;
}
.año1{
    width: 50%;
    margin: auto;
    color: blue;
}
.texto1{
    width: 50%;
    margin: auto;
}
.contenedor1{
    font-size: medium;
    text-align: left;
}
.flex-box2{
    display: flex;
    margin: auto;
    border: 1px solid black;
    width: 50%;
    height: 200px;
    background-color: rgb(255, 255, 255);

    position: absolute;
    top: 770px;
    left: 400px;

    box-shadow: 10px 10px 13px gray;
}
.año2{
    width: 50%;
    margin: auto;
    color: blue;
}
.texto2{
    width: 50%;
    margin: auto;
}
.contenedor2{
    font-size: medium;
    text-align: left;
}
.flex-box3{
    display: flex;
    margin: auto;
    border: 1px solid black;
    width: 50%;
    height: 200px;
    background-color: rgb(255, 255, 255);

    position: absolute;
    top: 1020px;
    left: 400px;

    box-shadow: 10px 10px 13px gray;
}
.año3{
    width: 50%;
    margin: auto;
    color: blue;
}
.texto3{
    width: 50%;
    margin: auto;
}
.contenedor3{
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