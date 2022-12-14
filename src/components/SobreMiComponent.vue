<template>
    <main>
        <div>
        <header>
            <section class="lado1">
            </section>
            <section class="lado2">
            </section >
        </header>
    </div>

    <div class="foto">
        <header>
            <section class="foto1">
                <img src="../assets/foto.png" alt="">
                <h1>Estevan Ibarra</h1>
            </section>
            <section class="texto">
                <h1>Este soy yo </h1>
                <h1>Un poco sobre mi</h1>
                <div class="contenido">
                    <p>
                    Estudio en el SENA un tecnologo de
                    Analisis y desarrollo de sistemas de informacion,
                    voy en 4 trimestre de estudio.
                </p>
                </div>
                
            </section >
        </header>
    </div>
    <div>
        <button  class="boton1" @click="$router.push('/Curriculum')">Curriculum</button>
    </div>
    <div>
        <button class="boton2" @click="$router.push('/Proyecto')">Proyecto</button>
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
    name: 'SobreMiComponent',
    data(){   
    }
}
</script>

<style scoped>
header{
    display: flex;
}

.lado1{
    background-color: rgb(223, 205, 182);
    width: 40%;
    height: 700px;
}
.lado2{
    background-color: rgb(246, 246, 246);
    width: 60%;
    height: 700px;
}
.foto{
    
    position: absolute;
    top: 300px;
    left: 350px;

    border-radius: 4px;
}
.foto1{
    background-color: rgb(243, 224, 200);
    padding: 50px 50px 50px 50px;
    box-shadow: 10px 10px 13px gray;
}
img{
    width: 250px;
    height: 250px;
    box-shadow: 10px 10px 13px gray;
    border-radius: 50%;
}
.texto{
    background-color: rgb(255, 255, 255);
    box-shadow: 10px 10px 13px gray;
    width: 40%;
}
.contenido p {
    font-size: medium;
    text-align: center;
}
.boton1{
    background-color: rgb(247, 247, 247);
    width: 90px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgb(4, 2, 14);

    position: absolute;
    top: 550px;
    left: 790px;
    box-shadow: 10px 10px 13px gray;    
}
.boton1:hover{
    background-color: blue;
}
.boton2{
    background-color: rgb(247, 247, 247);
    width: 90px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgb(3, 1, 12);

    position: absolute;
    top: 550px;
    left: 940px;
    box-shadow: 10px 10px 13px gray;
}
.boton2:hover{
    background-color: blue;
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