const tipo1Opciones = [
  {
    titulo: "Bust/Head",
    precio: 100,
  },
  {
    titulo: "Half Body",
    precio: 120,
  },
  {
    titulo: "Full Body",
    precio: 140,
  },
];

const tipo2Opciones = [
  {
    titulo: "Bust/Head",
    precio: 60,
  },
  {
    titulo: "Half Body",
    precio: 70,
  },
  {
    titulo: "Full Body",
    precio: 85,
  },
];

const tipo3Opciones = [
  {
    titulo: "Bust/Head",
    precio: 40,
  },
  {
    titulo: "Half Body",
    precio: 50,
  },
  {
    titulo: "Full Body",
    precio: 60,
  },
];

const tipo5Opciones = [
  {
    titulo: "Front",
    precio: 80,
  },
  {
    titulo: "Front & Back",
    precio: 120,
  },
  {
    titulo: "Front, Back + Back",
    description: "the extra body can be an outfit or a side body",
    precio: 158,
  },
];

export const commData = [
  {
    title: "Full Color",
    optionList: tipo1Opciones,
    galeria: [
      "/examples/ej2.png",
      "/examples/full.jpg",
      "/examples/ej1.png",
      "/examples/ej6.png",
    ],
  },
  {
    title: "Simple Color",
    optionList: tipo2Opciones,
    galeria: ["/examples/ej9.png", "/examples/ej11.png", "/examples/ej18.png"],
  },
  {
    title: "Lineart",
    optionList: tipo3Opciones,
    galeria: ["/examples/sk4.png", "/examples/sk5.png", "/examples/sk1.jpg"],
  },
  {
    title: "Ref Sheets",
    optionList: tipo5Opciones,
    galeria: [
      "/examples/ref2.png",
      "/examples/ref4.png",
      "/examples/ref7.png",
      "/examples/ref6.png",
    ],
  },
];
