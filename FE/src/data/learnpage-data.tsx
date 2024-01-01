import { AiOutlineBuild } from "react-icons/ai";
import { LuPaintbrush2 } from "react-icons/lu";
import {
  Md3DRotation,
  MdCheckBoxOutlineBlank,
  MdLightMode,
  MdOutlineRoundedCorner,
} from "react-icons/md";
import { RiLandscapeFill, RiTriangleLine } from "react-icons/ri";
import { SiBlender } from "react-icons/si";
import { SiCinema4D } from "react-icons/si";
import { SiAutodesk } from "react-icons/si";

import SubstanceIcon from "../assets/substance-painter.svg";
import ArmorPaintIcon from "../assets/armorpaint.svg";
import PhotoshopIcon from "../assets/photoshop.svg";
import QuixelIcon from "../assets/quixel.svg";
import ZbrushIcon from "../assets/zbrush.svg";
import ThreeDCoatIcon from "../assets/3dCoat.svg";
import {
  FaCube,
  FaCubes,
  FaCubesStacked,
  FaGripLines,
  FaLeaf,
} from "react-icons/fa6";
import { GoDotFill, GoMirror } from "react-icons/go";
import { BiCylinder, BiPyramid } from "react-icons/bi";
import {
  TbChartDonut4,
  TbCone,
  TbSphere,
  TbSpherePlus,
  TbTopologyRing3,
} from "react-icons/tb";
import {
  GiCube,
  GiResize,
  GiSwordArray,
  GiWireframeGlobe,
} from "react-icons/gi";
import { IoMove } from "react-icons/io5";
import { PiCheckSquareOffset, PiSubtract } from "react-icons/pi";
import { VscSymbolBoolean } from "react-icons/vsc";

// DATA FOR SECTION 1
const sectionHero = [
  {
    label: "Modelling",
    description:
      "The process of creating the mesh and creating the geometry of a 3d model.",
    Icon: <AiOutlineBuild />,
    color: "text-purple-500 shadow-purple-500 group-hover:text-purple-200 ",
    cardStyle:
      " hover:shadow-purple-200 shadow-purple-500 hover:shadow-purple-500",
    colorBanner: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    lineLight: "bg-purple-600",
    lineDark: "bg-purple-300",
    border: "border-purple-500/20",
  },
  {
    label: "Texturing",
    description:
      "Texturing the model using uv unwrapping/wrapping techniques to achieve seamless textures for your model.",
    Icon: <LuPaintbrush2 />,
    color: "text-cyan-500 shadow-cyan-500 group-hover:text-cyan-200 ",
    cardStyle: " hover:shadow-cyan-200 shadow-cyan-500 hover:shadow-cyan-500",
    colorBanner: "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-300",
    lineLight: "bg-blue-600",
    lineDark: "bg-blue-300",
    border: "border-blue-500/20",
  },
  {
    label: "Lighting",
    description:
      "Shine a light to show that fine damn details of your model. Proper lighting conditions for a model will make certain parts of it to either pop or hide a part of your model.",
    Icon: <MdLightMode />,
    color: "text-yellow-500 shadow-yellow-500 group-hover:text-yellow-200 ",
    cardStyle:
      " hover:shadow-yellow-200 shadow-yellow-500 hover:shadow-yellow-500",
    colorBanner: "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-300",
    lineLight: "bg-yellow-600",
    lineDark: "bg-yellow-300",
    border: "border-yellow-500/20",
  },
  {
    label: "Rendering",
    description:
      "This is basically taking an image of your work. Imagine capturing a photo, it's similar as that but you have everything at your hands.",
    Icon: <RiLandscapeFill />,
    color: "text-green-500 shadow-green-500 group-hover:text-green-200 ",
    cardStyle:
      " hover:shadow-green-200 shadow-green-500 hover:shadow-green-500",
    colorBanner: "bg-gradient-to-r from-green-500 via-lime-500 to-emerald-300",
    lineLight: "bg-green-600",
    lineDark: "bg-green-300",
    border: "border-green-500/20",
  },
];

// DATA FOR SECTION 2
const sectionModelling = [
  {
    label: "Modelling",
    description:
      "Build your meshes using primitives like the cube, cone, sphere, cylinder and more.",
    Icon: <AiOutlineBuild />,
    color: "text-purple-500 shadow-purple-500 group-hover:text-purple-200 ",
    cardStyle:
      " hover:shadow-purple-200 shadow-purple-500 hover:shadow-purple-500",
    colorBanner: "bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500",
    details: {
      title: "3d Modelling",
      description: `3D modeling is  digital art that creates realistic representations of objects or scenes using computer software.
      Artists and designers use a variety of techniques, such as wireframes, surfaces, or solid modeling, to build three-dimensional virtual models that simulate the real-world characteristics of physical objects.
      physical.
      This process serves a variety of purposes, from creating characters and entertainment environments such as games and movies to designing architectural structures, products, and simulations for training scenarios.
      In industries ranging from entertainment to product design and architecture, powerful 3D modeling software like Blender or Autodesk Maya play a central role.
      These tools empower creators  to sculpt, shape and visualize their ideas, enabling the efficient development of virtual prototypes and realistic digital environments.`,
      imageUrl:
        "https://images.pexels.com/photos/7788367/pexels-photo-7788367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      videoUrl: "",
    },
  },
  {
    label: "Blocking",
    description:
      "There is a process of blocking primitive meshes in order to attain a figure called blocking.",
    Icon: <LuPaintbrush2 />,
    color: "text-cyan-500 shadow-cyan-500 group-hover:text-cyan-200 ",
    cardStyle: " hover:shadow-cyan-200 shadow-cyan-500 hover:shadow-cyan-500",
    colorBanner: "bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-300",
    details: {
      title: "Blocking",
      description: `Blocking primitives in 3D refers to the first step in building a 3D model  using basic geometric shapes or primitives as a basis.
      This technique involves creating a simple representation of an object or scene using basic shapes such as a cube, sphere, cylinder, or cone.
      By strategically arranging and manipulating these primitives, artists and designers establish the overall shape and structure of the 3D model before refining it with more detailed geometry.
      Blocking primitives provides an important starting point in the 3D modeling process, allowing creators to quickly establish scale, layout, and spatial relationships in virtual space.
      This initial lock-in phase provides a solid framework that can be iteratively refined and developed as the model progresses, making it an effective approach for effectively ideating
      and visualizing Complex 3D designs in various industries, including game development, animation, and architectural visualization.`,
      imageUrl: `https://media.sketchfab.com/models/1e088a9800b3405184493c19c7655600/thumbnails/64e03fd6411a4b579288213f4b173c30/d082a3ebcfc8462a8c80dbcd2fb1cca2.jpeg`,
      videoUrl: "",
    },
  },
  {
    label: "Sculpting",
    description:
      "Create mesh through sculpting as you in real life. Another way of creating a model (high poly).",
    Icon: <MdLightMode />,
    color: "text-yellow-500 shadow-yellow-500 group-hover:text-yellow-200 ",
    cardStyle:
      " hover:shadow-yellow-200 shadow-yellow-500 hover:shadow-yellow-500",
    colorBanner: "bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-300",
    details: {
      title: "Sculpting",
      description: `3D modeling is commonly done by digital artists through the use of tools like Blender, ZBrush, or Mudbox for sculpting.
      Like clay modeling or stone sculpting, digital sculpting allows artists to directly shape and sculpt a virtual surface in complex ways.
      With Blender, a widely used open source 3D modeling software, users can access various features for manipulating model surfaces and brushes, which are now seamlessly integrated with other tools.
      Whether in Blender or other advanced 3D software, digital sculpting has become the foundation of character modeling and the creation of organic objects.
      Artists exploit this technique to add fine detail, define texture, and create complex shapes with a level of precision that mirrors traditional sculpting methods.
      The creative and intuitive process of creating 3D models allows artists from all sectors of animation, games, and digital art to incorporate detailed virtual shapes into their work. 
      One thing to add is that the stated technologies/softwares are used as they are the most recommended ones especially Zbrush. Blender has improved alot but Zbrush
      is still the best solution for sculpted models.`,
      imageUrl:
        "https://cdn.mos.cms.futurecdn.net/66417c5358238dd99302326eeed20c73.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Retopologize",
    description: "Dense polygons in your model? Retopologize to optimize that!",
    Icon: <RiLandscapeFill />,
    color: "text-green-500 shadow-green-500 group-hover:text-green-200 ",
    cardStyle:
      " hover:shadow-green-200 shadow-green-500 hover:shadow-green-500",
    colorBanner: "bg-gradient-to-b from-green-500 via-lime-500 to-emerald-300",
    details: {
      title: "Retopologize",
      description: `Retopology is an important process in 3D modeling that involves optimizing and reconstructing the geometry of a 3D model.
      This technique is used to enhance the efficiency and performance of models, especially those originally created by sculpting or other highly detailed methods.
      In retopology, artists manually or automatically create a new surface with a clear, organized topology, often using simpler polygons such as quadrilaterals.
      This process ensures that the 3D model maintains a manageable structure, optimized  for tasks such as animation, rendering, and real-time applications.
      In software like Blender, Maya, or 3ds Max, retopology tools make it easy to create clean meshes while preserving the essential details of the original sculpted or modeled surface.
      This step is essential for refining and preparing 3D models for applications ranging from character animation in movies and games to architectural visualization.
      Retopology strikes a balance between maintaining complex details and optimizing the model for efficient performance, demonstrating its importance in the overall 3D modeling process.`,
      imageUrl:
        "https://ddz4ak4pa3d19.cloudfront.net/cache/1d/25/1d2548aad194d37acde3b6c657ca12c9.jpg",
      videoUrl: "",
    },
  },
];

const sectionModellingFileTypes = [
  {
    label: "FBX",
    details: {
      title: "FBX",
      description: `FBX or Filmbox features a robust and versatile 3D file format developed by 
        Autodesk. It is widely used in the entertainment industry to exchange 3D content between 
        different software applications. FBX files encapsulate  comprehensive information such as 
        geometry, materials, lights, animations, cameras, and more. This makes it the first choice
        for complex scenes in animation, games, and film production. However, the unique nature of 
        FBX can be a double-edged sword. Although it excels at providing a comprehensive solution 
        for sharing 3D content, its closed-source format can be difficult for those who prefer open 
        standards. Additionally, the complexity of FBX results in larger files than other formats,
        which can impact storage and data transfer efficiency. Despite these considerations, FBX 
        remains a powerful and widely used format, especially in professional environments where its 
        feature-rich features are essential for seamless collaboration between different software tools.`,
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:640/format:webp/1*0jkH7rarqfLhXS1sOS3fUQ.png",
      videoUrl: "",
    },
  },
  {
    label: "OBJ",
    details: {
      title: "OBJ",
      description: `The OBJ (Wavefront .obj) file format is a simple and widely supported 3D file format
        commonly used to store 3D geometry data. Represents a 3D model by defining vertices, faces, normals,
        textures, and material properties in  plain text. OBJ files are known for their simplicity, making 
        them easy to understand and widely compatible with a variety of 3D modeling and rendering programs. 
        OBJ files are versatile and can store basic information about geometry, materials, and textures, 
        but they lack some of the advanced features found in more complex formats. However, the simplicity 
        of OBJ is advantageous in scenarios where a lightweight, human-readable format is preferred, especially
        for simple 3D models, or when interoperability between different software applications is important.
        Overall, OBJ is a practical choice for basic 3D geometry representation, with a balance of simplicity and compatibility.`,
      imageUrl:
        "https://i.all3dp.com/workers/images/fit=scale-down,w=1200,h=675,gravity=0.5x0.5,format=auto/wp-content/uploads/2018/05/26152516/obj-lead.jpg",
      videoUrl: "",
    },
  },
  {
    label: "GLTF",
    details: {
      title: "GLTF",
      description: `GLTF (Graphics Library Transmission Format) is a 3D file format designed for efficient 
        transmission and loading of 3D scenes and models. The structure uses JSON, making it easy to parse for
        both humans  and machines. GLTF stands out for being lightweight and efficient, supporting geometry, 
        materials, animation, and textures while minimizing file size. This feature makes it especially suitable 
        for web-based applications and augmented reality (AR) or virtual reality (VR) experiences where fast 
        loading times are critical. However, be aware that  while GLTF is great for its intended purpose, it 
        may not be the best choice for highly complex scenes or scenarios that require advanced visual effects. 
        Its strengths lie in its simplicity and speed, making it the preferred format for real-time applications.
        In summary, GLTF is a versatile format for efficiently delivering 3D content, with a focus on accessibility
        and performance in applications where these attributes are a priority.
       
       `,
      imageUrl:
        "https://stayrelevant.globant.com/wp-content/uploads/2019/11/Picture2.png",
      videoUrl: "",
    },
  },
  {
    label: "STL",
    details: {
      title: "STL",
      description: `STL (Standard Triangle Language) is a widely used 3D file format often used in 3D printing. 
          Represent 3D models through a network of triangles to directly represent geometry. STL files focus 
          on defining the surface geometry of an object and do not include features related to color, texture, 
          or animation. This simplicity makes STL an ideal choice for 3D printing applications, as it accurately 
          describes the structure of an object in a format that is easily understood by most 3D printers. However,
          it is important to note that STL has limitations when representing complex scenes or detailed visual
          aspects that go beyond basic geometry. It is primarily a format for conveying the physical structure of 
          3D models, and its simplicity may not be suitable for applications that require high visual fidelity or 
          dynamic elements. Despite its technical simplicity, STL remains an important format in the field of 3D 
          printing and rapid prototyping due to its compatibility and ease of use in certain applications.`,
      imageUrl:
        "https://d2pye4zfc3qqup.cloudfront.net/wp-content/uploads/2020/02/03151009/stl-file-2-624x299.png",
      videoUrl: "",
    },
  },
];

const sectionModellingSoftwares = [
  {
    icon: <SiBlender />,
    styles: "w-full h-20 ",
    url: "https://www.blender.org/",
  },
  {
    icon: <SiCinema4D />,
    styles: "w-full h-20 ",
    url: "https://www.maxon.net/en/cinema-4d",
  },
  {
    icon: <SiAutodesk />,
    styles: "w-full h-20 ",
    url: "https://asean.autodesk.com/",
  },
];

const sectionModellingPrimitives = [
  {
    icon: <MdCheckBoxOutlineBlank />,
    label: "Faces",
    details: {
      title: "Faces",
      description: `In the context of 3D modeling, faces are fundamental components of the mesh structure.
        A face represents a flat, polygonal surface in a 3D model and is defined by a set of vertices connected by edges.
        These vertices form the corners of the surface, and  edges represent the lines connecting these vertices.
        The most common types of faces are triangles (consisting of three vertices) and quadrilaterals (consisting of four vertices), although more complex designs may include faces with a higher number of vertices.
        Faces play an important role in determining the overall shape and appearance of a 3D object.
        The composition and organization of faces determine how light interacts with the model, affecting its visual characteristics.
        Properly constructed surfaces contribute to effective rendering and simulation as well as  accurate representation of complex surfaces.
        Understanding facial composition is essential for 3D modelers and computer graphics artists who work to create realistic and visually appealing 3D environments.`,
      imageUrl: `https://cdn1.byjus.com/wp-content/uploads/2018/11/maths/2016/07/13085743/faces-edges-vertices.png`,
      videoUrl: "",
    },
  },
  {
    icon: <FaGripLines />,
    label: "Edges",
    details: {
      title: "Edges",
      description: `Edges, in the context of 3D modeling and mesh structures, are  line segments connecting two vertices in a 3D object.
        They form the framework that defines the boundaries and shapes of individual faces in the mesh.
        Essentially, edges define the shape of the model by establishing  connections between its vertices.
        Simply put, think of edges as basic elements that describe the structure of a 3D object.
        These edges connect vertices to form faces, whether  triangles, quadrilaterals, or other polygons.
        The layout and organization of edges significantly affects the  appearance and characteristics of the model.
        Understanding the role of edges is important for 3D modelers and artists, as it  not only impacts visual aesthetics but also affects the model's performance during rendering and simulation.
        Paying close attention to edge flow, or how edges move across the model's surface, is essential to achieving both accuracy and visual appeal in 3D modeling.`,
      imageUrl:
        "https://cdn1.byjus.com/wp-content/uploads/2018/11/maths/2016/07/13085749/faces-edges-vertices-1.png",
      videoUrl: "",
    },
  },
  {
    icon: <GoDotFill />,
    label: "Vertex",
    details: {
      title: "Vertex",
      description: `In the field of 3D modeling and mesh construction, a vertex is a fundamental point in space that defines  specific coordinates within a 3D object.
        Vertices serve as the building blocks of the mesh and  play a central role in forming the overall structure of the 3D model.
        Connected by edges, vertices form the corners of faces in the mesh, creating the polygonal surfaces that make up the object.
        A vertex typically contains information such as its spatial coordinates (x, y, z) and may also store additional data, such as color or texture coordinates.
        The layout and organization of vertices have a profound impact on the shape and appearance of the 3D model.
        Skilled 3D modelers strategically position vertices to sculpt detailed and complex shapes, ensuring  the mesh accurately represents the object's intended shape.
        Vertex manipulation  is a fundamental aspect of the 3D modeling process, affecting both the visual aesthetic and the underlying structure of the digital representation.`,
      imageUrl:
        "https://cdn1.byjus.com/wp-content/uploads/2018/11/maths/2016/07/13085751/faces-edges-vertices-2.png",
      videoUrl: "",
    },
  },
];

const sectionModellingMeshStructure = [
  {
    icon: <FaCube />,
    label: "Cube",
    details: {
      title: "Cube",
      description: `The cube in 3D modeling is a simple geometric primitive characterized by  six equal sides, forming a  three-dimensional object with six faces.
        Each face is a perfect square, and the cube has eight vertices where the edges meet.
        With twelve edges and six faces, cubes are a fundamental element of 3D modeling, often used as a starting point to create more complex shapes or as a basic element for constructing various objects.
        in the digital landscape.
        Because of its symmetry and regularity, manipulating the cube is a fundamental skill for 3D modelers and  an essential tool for understanding and practicing basic concepts in the field.
        In computer graphics software, creating and manipulating shapes is a simple but very important operation.
        Artists and designers often make use of cubes to establish the basic framework of a 3D scene, and they can modify or combine multiple cubes to build different structures and environments.
        The cube's popularity in 3D modeling comes from its versatility and ease of use, making it an essential part of the toolbox of digital creators across various industries.`,
      imageUrl: `https://media.printables.com/media/prints/320980/images/2771142_f304f533-e84d-448f-bfec-1796c9487368/thumbs/inside/1280x960/png/large_display_d7b4ddb3-f5d5-4b5b-b821-730aa96b139d_320980.webp`,
      videoUrl: "",
    },
  },
  {
    icon: <BiCylinder />,
    label: "Cylinder",
    details: {
      title: "Cylinder",
      description: `In 3D modeling, a cylinder is a basic geometric primitive that represents a three-dimensional object with a circular or elliptical cross-section.
        It is characterized by two parallel and equal rounded bases connected by a curved surface.
        The axis is a straight line passing through the center of the two circular bases that determines the main direction of the cylinder.
        A cylinder has three main components:  two circular faces (or bases) and a cylindrical surface connecting these bases.
        Cylinders are versatile primitives commonly used in 3D modeling to represent a variety of objects, from basic industrial parts to more complex shapes such as tubes, columns or even Stylized objects in animation.
        The simplicity of the cylinder makes it an essential tool for understanding and practicing basic 3D modeling concepts, and it can be easily manipulated and combined with other primitives to create create more complex structures in the digital scene.`,
      imageUrl: `https://blenderartists.org/uploads/default/original/3X/a/6/a63394fbd7959e6d5bbdbb4ba0d3349f44aeea7f.png`,
      videoUrl: "",
    },
  },
  {
    icon: <TbSphere />,
    label: "Sphere",
    details: {
      title: "Sphere",
      description: ` In 3D modeling, a sphere is a basic geometric primitive that represents a perfectly round three-dimensional object.
        It is defined by a set of points in space  equidistant from a central point, creating a uniform surface  in all directions.
        A sphere has no edges or vertices and is characterized by a continuously curved surface.
        Radius, which is the distance from the center to any point on the spherical surface, is a key  parameter.
        Spheres are widely used in 3D modeling to represent objects with symmetrical and round shapes, such as planets, balls, or certain architectural elements.
        The simplicity of the sphere makes it fundamental to understanding and practicing the basic concepts of 3D modeling.
        Digital artists and designers can easily manipulate the spheres, adjusting their size, position and orientation to create a variety of shapes and objects in virtual environments.`,
      imageUrl: `https://cgian.com/wp-content/uploads/2022/05/How-to-make-a-smooth-sphere-in-Blender-07.jpg`,
      videoUrl: "",
    },
  },
  {
    icon: <TbCone />,
    label: "Cone",
    details: {
      title: "Cone",
      description: `In 3D modeling, a cone is a basic geometric primitive that represents a three-dimensional object with a circular or elliptical base that tapers to a single point, called the vertex or cusp.
        The central axis extends from the apex to the center of the circular base, determining the cardinal direction of the cone.
        The curved surface connects the base to the top, forming a cone shape.
        Cones are characterized by their simplicity and are often used in 3D modeling to represent various objects, such as traffic cones, trees or architectural elements.
        Similar to other primitives, cones serve as  building blocks in 3D modeling, allowing for the creation of more complex shapes and structures in digital scenes.
        Artists and designers can manipulate cones by adjusting parameters such as height and base radius, allowing for  diverse shapes.
        Versatility and ease of use make the cone a valuable tool for  learning and applying 3D modeling concepts across various industries.`,
      imageUrl: `https://i.ytimg.com/vi/ye7de4o8gZI/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-DoACkAmKAgwIABABGFsgWyhbMA8=&rs=AOn4CLALWG7NHilmY5Om3DJBTSTsyFQfLA`,
      videoUrl: "",
    },
  },
  {
    icon: <BiPyramid />,
    label: "Pyramid",
    details: {
      title: "Pyramid",
      description: `The term pyramid is used in 3D modeling to describe a three-dimensional object with vertices and polygonal bases, each with triangular sides that meet at the vertex.
        The base can be any polygon, usually a square or  triangle, while the triangular sides connect the vertices of the base to the top.
        The height of a pyramid is the distance from the base to the top, determining its overall size and shape.
        Pyramids are versatile shapes and can be applied in a variety of contexts, such as architectural modeling, game design, and simulation.
        Like other primitive forms, pyramids serve as essential building blocks in 3D modeling, allowing artists and designers to create more complex structures in digital environments .
        Manipulating the pyramid involves adjusting parameters such as base size, height, and orientation to achieve different shapes.
        The geometric simplicity and  elegance of pyramids make them valuable items in the  3D modeler's toolbox, providing a simple way to represent a variety of objects and  elements.
        different architecture.`,
      imageUrl: `https://3dcoat.com/forum/uploads/monthly_2017_10/Pyramid.jpg.066448a03a5f059b2bfc6f7629633dfe.jpg`,
      videoUrl: "",
    },
  },
  {
    icon: <TbChartDonut4 />,
    label: "Torus",
    details: {
      title: "Torus",
      description: `Toruses (or triangular shapes) are used in 3D modeling to represent three-dimensional objects, such as donuts or rings, using a geometric primitive.
        It is created by rotating a circle ("center circle" or "ring") around an axis that is coplanar with the circle but does not intersect it.
        The resulting shape consists of a tube with a circular cross-section and it is characterized by two main parameters: the radius of the central circle (distance from the center of the tube to the center of the circle) and the radius of the tube itself.
        These parameters determine the overall size and proportions of the torus.
        Tori (plural of torus) is often used in 3D modeling to represent objects with a ring-shaped structure, such as lifebuoys, certain types of architectural elements, or elements stylized design.
        The torus is another example of a geometric primitive that simplifies the modeling process, allowing artists and designers to create more complex shapes by adjusting several key parameters.`,
      imageUrl: `https://gamedevtraum.com/wp-content/uploads/es/diseno-grafico/diseno-3d/blender-2-8/como-cambiar-el-origen-en-blender/change-origin-torus.webp`,
      videoUrl: "",
    },
  },
];

const sectionModellingTransformations = [
  {
    icon: <GiResize />,
    label: "Scaling",
    details: {
      title: "Scaling",
      description: `Scaling in 3D modeling involves the use of simple algorithm to adjust a mesh's size along its axis.
        This transformation allows modelers to uniformly increase or decrease the size of an object, affecting its length, width, and height.
        Scaling is a versatile tool used for a variety of purposes, from fine-tuning a model's overall proportions  to creating dimensional variations within a scene.
        For example, scaling can be applied to enlarge or reduce architectural elements, resize characters in gaming environments, or fine-tune the size of intricate details in sculptures digital.
        The important aspect of scaling is that it changes the size of the object while maintaining its shape, thus providing a dynamic way to control visual impact and spatial relationships in 3D scene.
        When editing meshes, scaling becomes an essential part of the modeling process.
        The vertices, edges, and faces of the mesh can be  scaled or stretched uniformly along specific axes to achieve the desired shape or proportion.
        This is especially useful for fine-tuning complex details or adjusting the overall structure of a 3D model.
        Whether sculpting figures, designing architectural features, or creating virtual landscapes, an understanding and skillful application of scaling operations contribute to modelers' precise control.
        and nuances to the spatial characteristics of their digital creations.`,
      imageUrl:
        "https://docs.blender.org/manual/en/latest/_images/scene-layout_object_editing_transform_scale_basic-usage.png",
      videoUrl: "",
    },
  },
  {
    icon: <Md3DRotation />,
    label: "Rotation",
    details: {
      title: "Rotation",
      description: `Rotation is a crucial change in 3D modeling, as it allows modelers to manipulate the location of objects within particular three-dimensional space.
        This transform operation allows you to rotate or pan an object, whether it is a character, an architectural element, or any 3D entity, around its center or a specified rotation point.
        Rotation brings dynamism to scenes, making it easier to animate, simulate, or simply adjust the position of elements in a composition.
        In practice, rotation involves specifying the angle or degree of rotation and selecting the axis (X, Y, or Z) around which the transformation occurs.
        This dynamic tool allows artists to achieve a variety of effects, from  subtle tilts to complex rotations.
        In mesh editing, rotation plays an important role in designing and refining the appearance of the 3D model.
        It helps position objects accurately, align elements, and give the scene a sense of movement or direction.
        Mastery  rotation allows 3D modelers to bring life, perspective and cohesion to their digital creations, highlighting the dynamic potential inherent in  virtual space.`,
      imageUrl: "https://i.stack.imgur.com/WX7JF.png",
      videoUrl: "",
    },
  },
  {
    icon: <FaCubes />,
    label: "Extrude",
    details: {
      title: "Extrude",
      description: `By extending or extracting faces, edges, or vertices of a mesh along arbitrary directions, extrusion is essentially removing layers and creating depth and volume in 3D modeling.
        This transformation adds a new dimension to the geometry, effectively giving  depth and structure to flat surfaces.
        The extrusion process is commonly used in a variety of contexts, such as architectural design, character modeling, and creating complex objects.
        When applied to mesh editing, extrusion involves selecting specific elements of a mesh, such as a face or  set of faces, and extending them outward or inward.
        This process is similar to pushing or pulling a shape to create additional geometry.
        For example, extruding the face of a cube can create a box with more depth.
        Artists utilize extrusion to create intricate details, add dimension to surfaces, or create complex structures.
        This versatile tool significantly contributes to the creation of complex 3D models by providing a way to build on existing geometry and improve the visual richness of digital scenes.`,
      imageUrl:
        "https://digilent.com/blog/wp-content/uploads/2014/08/Simple-extrusion.jpg",
      videoUrl: "",
    },
  },
  {
    icon: <IoMove />,
    label: "Translate",
    details: {
      title: "Translate",
      description: `The transformation of an object from one location to
        another in three-dimensional space is known as
        translation, which refers to the fundamental change.
        This operation allows the modeler to reposition entire
        meshes or specific elements, thereby affecting the
        overall arrangement of elements in a scene.
        Displacement is determined by specifying the amount of
        movement along each axis (X, Y, and Z), indicating the
        direction and distance of movement. When editing
        meshes, translation becomes an important tool for
        adjusting spatial relationships between objects or
        elements in a scene. By specifying precise
        translations, modelers can place objects in desired
        positions, create symmetrical arrangements, or
        precisely align components. Translation is especially
        useful in architectural modeling, where elements such
        as walls, windows or doors require precise placement.
        Additionally, in character modeling or animation,
        translation is essential to allow the animator to
        control the movement of the character or object
        smoothly in a digital environment. The ability to
        apply translations effectively contributes to the
        spatial organization and dynamic layout of the 3D
        model.`,
      imageUrl:
        "https://docs.blender.org/manual/en/2.79/_images/editors_3dview_object_editing_transform_control_manipulators_options-translate.png",
      videoUrl: "",
    },
  },
];

const sectionModellingModifiers = [
  {
    icon: <MdOutlineRoundedCorner />,
    label: "Bevel",
    details: {
      title: "Bevel",
      description: `The bevel modifier is a crucial component of 3D modeling, as it can enhance the visual qualities of digital objects by adding controlled curvature to the edges.
        their sharpness.
        Think of it as a virtual chamfer or rounding tool, meticulously adjusting where surfaces, edges, and vertices meet.
        This subtle modification minimizes the sharpness of right-angled corners, contributing to a more realistic and attractive presentation of the 3D model.
        In practice, the bevel modifier gives artists and designers the ability to precisely control the degree of rounding.
        By adjusting parameters such as bevel width, number of segments and profile shape, users can achieve a variety of effects, from subtle enhancements to more pronounced transformations.
        This versatility makes the Bevel Modifier a must-have tool for fine-tuning architectural renderings, perfecting product designs, or adding flair to character models.
        Essentially, it is a digital crafting tool that draws attention to detail, contributing to a neat and professional finish to 3D models.`,
      imageUrl:
        "https://www.oreilly.com/api/v2/epubs/9780133886283/files/graphics/06fig06.jpg",
      videoUrl: "",
    },
  },
  {
    icon: <GoMirror />,
    label: "Mirror",
    details: {
      title: "Mirror",
      description: `In 3D modeling, the mirror modifier is seen as a strategic tool that can help to speed up and simplify the process of creating symmetrical objects.
        Acting as a virtual reflection, this modifier copies and reflects a mesh or its components on a specified axis, instantly creating a symmetrical copy.
        This handy feature greatly streamlines the modeling process, reducing the need for manual copying and ensuring accurate symmetry, especially in character modeling, architectural design, and other different symmetrical structures.
        From a technical standpoint, the mirror modifier creates a mirror copy by flipping mesh elements on the specified axis.
        Artists can seamlessly switch between half-original and half-reflected editing, ensuring that changes are reflected in real time.
        This not only improves efficiency but also helps maintain accuracy and consistency throughout the modeling process.
        Whether creating characters with perfect bilateral symmetry or ensuring architectural accuracy, Mirror Modifier is an invaluable asset for 3D modelers looking for both speed and precision.
        accuracy in their digital works.`,
      imageUrl:
        "https://blenderartists.org/uploads/default/original/4X/1/c/c/1ccbcfd54d48d916f3d93e45b20ca0a609c5f655.PNG",
      videoUrl: "",
    },
  },
  {
    icon: <TbSpherePlus />,
    label: "Subsurf",
    details: {
      title: "Subdivision surface",
      description: `The use of subsurface modifiers (subdivision surfaces) has become an essential aspect of 3D modeling, enhancing the smoothness and detail of digital objects by subdividing their geometry.
        their learning repeatedly.
        Working like a digital smoothing algorithm, this modifier refines the appearance of meshes by increasing the density of vertices and faces.
        By iterative meshing, the subsurf modifier transforms angular surfaces into smoother, more organic shapes, creating a refined and visually appealing  3D model.
        Technically, the subsurf modifier works by dividing each face of the mesh into smaller faces, creating a more complex and detailed surface.
        Artists have the ability to control the level of division, balancing the desired level of flexibility with computational efficiency.
        This modifier is especially beneficial in character modeling, product design, and environment modeling, where achieving natural, curved surfaces is paramount.
        Its technical strength lies in the ability to easily add complexity and detail, thereby contributing to the creation of sleek and aesthetically pleasing 3D models in various applications.
       
       .`,
      imageUrl:
        "https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_subdivision-surface_grid.png",
      videoUrl: "",
    },
  },
  {
    icon: <GiSwordArray />,
    label: "Array",
    details: {
      title: "Array",
      description: `By using the array modifier, you can effortlessly and clearly duplicate objects in 3D modeling.
        It's like magic: when you want to repeat things in a pattern, this modifier can do it for you.
        Imagine creating an urban scene with many identical buildings or a beautiful flower pattern  in the garden; Table modifiers can copy and arrange them  the way you want.
        Technically, the array modifier works by copying and ordering objects based on how you want them to iterate.
        You can tell it how many copies you need, the distance between them, and the direction they should go.
        This tip not only saves time but also ensures everything looks perfect.
        Whether you're creating a row of floor lamps or a fun design on the wall, Network Modifier is like having a helpful assistant who loves pattern and repetition in your 3D modeling adventures.`,
      imageUrl:
        "https://cgian.com/wp-content/uploads/2022/06/Potato-Chips-Blender-Array-Normal.webp",
      videoUrl: "",
    },
  },
  {
    icon: <PiCheckSquareOffset />,
    label: "Solidify",
    details: {
      title: "Solidify",
      description: `The solidify modifier is a useful tool for 3D modeling, as it can add thickness to the surface of an object and transform spherical shapes into cubes.
        It's like taking content onto a thin sheet of paper and turning it into a proper object with depth.
        This modifier is useful for creating more realistic models, especially when you want to give  thickness or volume to surfaces.
        Technically, the solidify modifier works by adding a layer around an object's existing surface, making it thicker.
        You can control how thick you want this layer  and whether it conforms to the original shape.
        This is useful when creating things like walls, cushions, or anything else that requires a bit of weight.
        The solidify modifier is like a magic tool that turns flat shapes into tangible three-dimensional wonders in the  3D modeling world.`,
      imageUrl:
        "https://cgian.com/wp-content/uploads/2023/07/Blender-Solidify-Modifier-800x445.jpg",
      videoUrl: "",
    },
  },
  {
    icon: <VscSymbolBoolean />,
    label: "Boolean",
    details: {
      title: "Boolean",
      description: `3D modeling relies heavily on the Boolean modifier, which can assist in combining, subtracting, or finding overlaps between shapes.
        It's like having a set of digital tools that let you merge objects, cut  them, or define their intersections.
        This modifier is really useful when you want to create more complex shapes or modify the shape of your model precisely.
        Technically, Boolean modifiers work by applying operations that mimic actions you would do in the real world.
        You can use it to join two shapes into one (addition), cut a specific part of a shape using another shape (subtraction), or see where two shapes overlap (intersection).
        It's a powerful tool for you to get creative with  designs or make precise adjustments to your model.
        Boolean modifiers are like a set of digital tools that make 3D modeling a little more similar to working with real-world materials, allowing you to shape and tweak your creations according to your needs.
        the way you want.`,
      imageUrl:
        "https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_booleans_union-intersect-difference-examples.png",
      videoUrl: "",
    },
  },
  {
    icon: <PiSubtract />,
    label: "Decimate",
    details: {
      title: "Decimate",
      description: `By reducing the complexity of 3D meshes and maintaining their natural shape, the decimal modifier is often used as a simplification assistant in modeling.
        It is like a digital sculpting tool that intelligently reduces the amount of detail in the model, making it more manageable without losing its essential form.
        This modifier is useful when you need to optimize model performance or simplify complex designs.
        Technically, the decimal modifier works by intelligently removing certain vertices and faces from the mesh while trying to maintain its original appearance.
        You can control the power of  simplification to find the right balance between reducing complexity and maintaining the  visual integrity of your model.
        This tool is especially useful in cases where you have a very detailed model but  need a lighter version for things like games or animations.
        The decimal modifier is like a number simplification assistant, making it easier to work with complex models in a variety of applications.`,
      imageUrl:
        "https://cgian.com/wp-content/uploads/2023/03/Blender-Decimate-Modifier-Reduce-Face-Count-800x445.jpg",
      videoUrl: "",
    },
  },
  {
    icon: <FaCubesStacked />,
    label: "Remesh",
    details: {
      title: "Remesh",
      description: `A mesh can be transformed into a new, uniform shape using the remesh modifier in 3D modeling.
        It's like giving your digital sculpture a new set of pixels, creating a more uniform and simpler surface.
        This modifier is especially useful when you want to redefine the shape of the model, improve the model's topology, or prepare the model for more detail.
        Technically, the remesh modifier works by decomposing existing geometry into a new set of uniformly distributed voxels (3D pixels).
        It then rebuilds the mesh from this mesh of voxels, yielding a more organized and regular  structure.
        Artists can control the level of detail and adjust the size of the new voxels to achieve the desired balance between simplicity and precision.
        The Remesh modifier is like a virtual sculptor's tool, allowing modelers to reshape and refine their creations with a fresh, uniform canvas, aiding subsequent revisions.
        easier to manage.`,
      imageUrl:
        "http://builder.openhmd.net/blender-hmd-viewport-temp/_images/modeling_modifiers_generate_remesh_mode-cone-example.png",
      videoUrl: "",
    },
  },
  {
    icon: <GiWireframeGlobe />,
    label: "Wireframe",
    details: {
      title: "Wireframe",
      description: `With a wireframe modifier, 3D modeling software can function as an interactive render filter that highlights the fundamental geometry of digital models.
        It's like wrapping your model in a frame of lines, providing a clear and dynamic view of its edges and vertices.
        This modifier becomes especially useful when you want to highlight geometry, create  technical illustrations, or add an artistic touch to your wireframe renderings.
        Technically, the wireframe modifier works by creating a grid of lines that trace the edges and contours of the original model.
        You can adjust settings like line thickness and color to customize the look of your wireframe.
        This modifier is a valuable tool for artists and designers who want to explore different visual styles or provide insight into the structural subtleties of their models .
        Whether you're looking for a technical look or  an artistic interpretation,  wireframe modifiers open up a new dimension of creative expression in  3D modeling.`,
      imageUrl:
        "https://docs.blender.org/manual/en/latest/_images/modeling_modifiers_generate_wireframe_example-crease.png",
      videoUrl: "",
    },
  },
  {
    icon: <RiTriangleLine />,
    label: "Triangulate",
    details: {
      title: "Triangulate",
      description: `The triangle modifier is used in 3D modeling to translate the faces of a mesh into triangles.
        It's like breaking down complex shapes into simpler building blocks, making the geometry simpler and more  computationally efficient.
        This modifier is useful when you need to optimize a model for certain applications, resolve shading issues, or prepare a model for export.
        Technically, the triangle modifier works by dividing the quadrilateral faces of a mesh into two triangles.
        Doing so simplifies the geometry and ensures that all faces have three vertices.
        Users can control how triangulation is applied, adjusting settings to achieve the desired results.
        This modifier is especially useful when dealing with renderers or applications that work better with triangle-based geometry.
        The triangle modifier is like a geometry simplification tool, streamlining your mesh for smoother interactions and improved compatibility.`,
      imageUrl: "https://i.ytimg.com/vi/who5WyIkWk4/maxresdefault.jpg",
      videoUrl: "",
    },
  },
];

const sectionModellingSurfaceTypes = [
  {
    icon: <GiCube />,
    label: "Hard surface",
    details: {
      title: "Hard surface",
      description: `Solid surface modeling is a specialized technique in 3D modeling that focuses on creating objects with distinct, well-defined edges and surfaces, commonly found in non-organic and artificial structures.
        create.
        Unlike organic modeling, which deals with natural shapes like animals or plants, hard surface modeling deals with things like vehicles, weapons, architecture, or any other object that has Sharp edges and precise details.
        In  hard surface modeling, artists use a combination of tools and modifiers to create clean, geometrically precise shapes.
        This involves precisely aligning vertices, edges, and faces to achieve a neat appearance with sharp corners and smooth surfaces.
        Artists often use techniques such as Boolean operations, chamfering, and edge looping to create intricate details while maintaining clear structure.
        Hard surface modeling is widely used in industries such as video games, cinema and product design, where the need for realistic and accurately manufactured objects is important.
        important.
        Mastering this technique requires a thorough understanding of topology, effective use of modeling tools, and a meticulous approach to detail, making it a valuable skill in the broader field of 3D computer graphics.`,
      imageUrl:
        "https://i0.wp.com/openvisualfx.com/wp-content/uploads/2020/12/OVFX_HardSurf_crate_v01_sample_image_01.jpg?ssl=1",
      videoUrl: "",
    },
  },
  {
    icon: <FaLeaf />,
    label: "Organic",
    details: {
      title: "Organic",
      description: `Organic modeling in the field of 3D design is a specialized approach that focuses on creating realistic, natural shapes, such as people, creatures, plants, and living elements.
        or inspired by other nature.
        Unlike hard surface modeling, which deals with geometric precision and sharp edges, organic modeling embraces the flexible and irregular shapes of the organic world.
        Artists engaged in organic modeling use techniques that simulate the complexity of living organisms.
        This involves manipulating vertices, edges, and faces to capture the subject's natural flow and contours.
        Sculpting tools, dividing surfaces, and techniques such as edge flow become important for achieving realistic, organic shapes.
        The goal is to recreate the intricate details of nature, including the subtle curves, variations and imperfections that make organic objects so visually appealing.
        Organic modeling has many applications in character design for animation, natural environment simulation, and scientific visualization with the goal of recreating the beauty and diversity of the living world in the field of engineering.
        digital.
        Mastering organic modeling requires a deep understanding of anatomy, attention to detail, and a creative approach to capturing the essence of life forms.`,
      imageUrl:
        "https://protofile3d.com/wp-content/uploads/2020/06/005-modelado-organico-protofile3d-barcelona.jpg",
      videoUrl: "",
    },
  },
];

const sectionModellingTopology = [
  {
    icon: <TbTopologyRing3 />,
    label: "Topology",
    details: {
      title: "Topology",
      description: `Topology, a field of 3D modeling, is concerned with the organization and configuration (vertices, edges or faces) of e.g.
        It plays an important role in determining how  a pattern deforms, subdivides and finally appears in its final form.
        Good topology is essential to achieve realistic animations, smooth surfaces, and efficient manipulation of 3D models.
        High-quality topology is characterized by a carefully considered geometric distribution, where edges flow naturally along the contours of the model.
        This is especially important in character modeling, where proper topology ensures realistic deformation during animation.
        Artists often strive to create even contours, maintaining a balance between detail and effect.
        Conversely, poor topology can lead to problems such as distortion during animation, uneven surfaces, or difficulty adding finer details.
        Understanding and implementing good topology includes considering edge flow, maintaining quadrilaterals (four-sided polygons), managing edge loops around key features, and optimizing  geometry for efficient display and processing.
        Whether modeling solid or organic surfaces, topology is a fundamental aspect of 3D modeling, influencing the model's appearance, behavior, and performance.`,
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/586b5c5b29687fbf8b601a98/1484210219253-6RQWREDPX329V3DOO4LP/Head.jpg",
      videoUrl: "",
    },
  },
];

const sectionModellingCAD = [
  {
    icon: <SiAutodesk />,
    label: "Cad modelling",
    details: {
      title: "Cad modelling",
      description: `Topology, a field of 3D modeling, is concerned with the organization and configuration (vertices, edges or faces) of e.g.
      It plays an important role in determining how  a pattern deforms, subdivides and finally appears in its final form.
      Good topology is essential to achieve realistic animations, smooth surfaces, and efficient manipulation of 3D models.
      High-quality topology is characterized by a carefully considered geometric distribution, where edges flow naturally along the contours of the model.
      This is especially important in character modeling, where proper topology ensures realistic deformation during animation.
      Artists often strive to create even contours, maintaining a balance between detail and effect.
      Conversely, poor topology can lead to problems such as distortion during animation, uneven surfaces, or difficulty adding finer details.
      Understanding and implementing good topology includes considering edge flow, maintaining quadrilaterals (four-sided polygons), managing edge loops around key features, and optimizing  geometry for efficient display and processing.
      Whether modeling solid or organic surfaces, topology is a fundamental aspect of 3D modeling, influencing the model's appearance, behavior, and performance.`,
      imageUrl:
        "https://www.cad-schroer.de/wp-content/uploads/2020/01/M4-DRAFTING-3D-CAD-Modellierung-07_de-1024x651.jpg",
      videoUrl: "",
    },
  },
];

// DATA FOR SECTION 3

const sectionTexturing = [
  {
    icon: <></>,
    style: "",
    colorBanner: "bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500",
    title: "Text. Painting",
    imageUrl: "https://armorpaint.org/img/x.jpg",
    textColor: "text-purple-200",
    textColorLight: "text-purple-800",
    details: {
      title: "Text. Painting",
      description: `The art of texture painting is a complex technique that involves artists applying intricate designs to the surface of fabricated 3D models with great care.
      Using specialized software, these digital artists engage in a process similar to painting, bringing life and realism to their works.
      Through the use of brushes, stamps, and a variety of tools, artists can add detailed details such as fine textures, subtle imperfections, or vibrant patterns, transforming already existing surfaces.
      flat into  rich and dynamic visual elements.
      This technique is especially important in character design, where the application of skin details, clothing patterns and accessories contribute significantly to the realism of the character.
      This hands-on approach to texturing is an integral part of the overall visual storytelling of  3D modeling, allowing artists to simulate a variety of materials and surfaces.
      Whether recreating the sturdiness of weathered stone, the shine of polished metal, or the softness of fabric, textured paint adds a layer of realism that elevates digital creations.
      Beyond simple coloring, texturing adds depth, flexibility, and  character to 3D models, making it an important step in the  process of creating video games, animations, and many other images.
      different digital.`,
      imageUrl: "https://i.ytimg.com/vi/l1_EnwI0vEc/maxresdefault.jpg",
      videoUrl: "",
    },
  },
  {
    icon: <></>,
    style: "",
    colorBanner: "bg-gradient-to-tl from-blue-500 via-cyan-500 to-blue-300",
    title: "Procedural",
    imageUrl: "https://i.stack.imgur.com/pOg9k.jpg",
    textColor: "text-cyan-200",
    textColorLight: "text-cyan-800",
    details: {
      title: "Procedural",
      description: `In 3D graphics, procedural texturing relies on mathematical algorithms that introduce a variable model to replace traditional image-based texturning.
      This approach allows artists to systematically create complex patterns, colors, and details, providing a dynamic and scalable alternative to creating textures manually.
      Whether mimicking the intricate details of natural elements or creating abstract, imaginative textures, process textures provide a versatile and effective way to achieve the look diverse surfaces.
      Their adaptability allows for easy adjustment and modification, ensuring that textures maintain detail and consistency even when applied at different scales within the 3D scene.
      Widely applied in  video games, animation, and visual effects, procedural textures bring a unique blend of realism and creativity to digital environments.
      The inherent randomness and algorithmic nature of procedural texturing contribute to the creation of visually appealing and non-repetitive surfaces, enhancing texturing efficiency
      and enriching  overall visual storytelling in 3D graphics.`,
      imageUrl: "https://i.stack.imgur.com/ktywD.jpg",
      videoUrl: "",
    },
  },
  {
    icon: <></>,

    colorBanner:
      "bg-gradient-to-tl from-orange-500 via-amber-500 to-yellow-300",
    title: "Uv unwrapping",
    imageUrl:
      "https://ddz4ak4pa3d19.cloudfront.net/cache/ab/4c/ab4cfeff03dcfb1bf3b03fbf1dad35be.jpg",
    textColor: "text-amber-200",
    textColorLight: "text-amber-800",
    details: {
      title: "Uv unwrapping",
      description: `UV unwrapping is an important step in the  3D modeling process, which involves “unwrapping” the surface of a 3D object into flat 2D space.
      This technique is essential for accurately applying textures to the model.
      During the UV unfolding process, the 3D surface is essentially peeled off and spread out flat, just like spreading out the surfaces of a paper model.
      The resulting planar representation, called a UV map, provides guidance for applying textures, ensuring  they align perfectly with the model shape.
      Artists use UV layer unfolding to create mappings between  3D models and 2D textures, allowing  precise placement of textures on the model's surface.
      Proper UV flow is essential to avoid texture distortion and ensure that textures surround the model in a natural and visually appealing manner.
      This technique is widely used in various industries, including gaming, animation, and visual effects, where realistic textures and details play 
      an important role in the lifecycle of a 3D model.`,
      imageUrl: "https://i.stack.imgur.com/CFQWx.jpg",
      videoUrl: "",
    },
  },
  {
    icon: <></>,
    style: "col-span-2",
    colorBanner: "bg-gradient-to-tl from-green-500 via-lime-500 to-emerald-300",
    title: "Decalling",
    imageUrl: "https://i.ytimg.com/vi/Esk9iPhHYDI/maxresdefault.jpg",
    textColor: "text-lime-200",
    textColorLight: "text-lime-800",
    details: {
      title: "Decalling",
      description: `Decals in 3D graphics involve applying decals, which are 2D images or textures, to a 3D model to add specific details, labels or  graphics.
      This technique is often used to improve realism and convey specific information without changing the underlying 3D geometry.
      Decals are especially useful in the gaming industry, where it allows  game elements to be customized with motifs such as logos, symbols, or warning signs.
      The decal process  involves mapping a 2D decal onto a 3D surface via UV coordinates.
      This mapping ensures that the sticker precisely follows the contours and details of the model.
      Decals are a versatile tool in 3D design, providing a cost-effective way to add complex details to models without the need for extensive geometry.
      This technique is widely applicable in a variety of contexts, including in-game media customization, architectural visualization, and any situation in 
      which the transmission of specific information or improvements Image fidelity is paramount.`,
      imageUrl:
        "https://www.blendernation.com/wp-content/uploads/2019/06/thumbnail_16-9.png",
      videoUrl: "",
    },
  },
  {
    icon: <></>,
    style: "",
    colorBanner: "bg-gradient-to-tl from-rose-900 via-pink-600 to-red-500",
    title: "Texture Maps",
    imageUrl:
      "https://cdna.artstation.com/p/assets/images/images/001/528/174/large/zeljko-mihajlovic-rocks-tex.jpg?1448023848",
    textColor: "text-red-200",
    textColorLight: "text-red-800",
    details: {
      title: "Texture Maps",
      description: `A texture map in 3D graphics is a 2D image that specifies the different features of the surface of.
      These images serve as guides for applying color, pattern, and detail to the model, contributing to its visual richness and realism.
      Different types of texture maps are used to convey specific information, such as color maps for base colors, regular maps for simulating surface collisions, special maps for control gloss, etc.
      The most common types of textures include diffuse textures, which define the base color of the model; reflection map, which controls the gloss or reflectivity of a surface; and regular maps, which create the illusion of surface detail without adding geometry.
      Artists use specialized software to create and apply these maps to achieve complex and realistic surfaces.
      Texture maps play a central role in the overall texturing process, improving the visual appeal of 3D models in 
      applications ranging from video games and animation to architectural renderings and virtual simulation.`,
      imageUrl: "https://i.stack.imgur.com/WGvIZ.jpg",
      videoUrl: "",
    },
  },
  {
    icon: <></>,
    style: "",
    colorBanner: "bg-gradient-to-tl from-gray-500 via-zinc-500 to-neutral-400",
    title: "Baking",
    imageUrl: "https://i.stack.imgur.com/sjPYi.png",
    textColor: "text-neutral-200",
    textColorLight: "text-neutral-800",
    details: {
      title: "Baking",
      description: `Texture baking is a  3D graphics technique that involves transferring detailed information from one 3D model to another by capturing  visual properties and mapping them onto a texture.
      This process is often used to preserve complex details, such as lighting, shadows, or high-resolution textures, from high polygon models to low polygon versions.
      Real-time applications like video games benefit from texture baking as it allows for efficient low-polygon models while maintaining fidelity.
      image.
      In texturing, a highly polygonal model, often containing complex details and shading, is used as a source for creating texture maps.
      These texture maps capture information such as ambient occlusion, normal maps, or color details.
      These maps are then applied to a simplified version of the low polygon model, ensuring that it retains the visual richness of the original high polygon model without the overhead calculate.
      Texture processing helps simplify the trade-off between visual quality and performance, enabling the creation of visually appealing 3D environments in resource-constrained applications.`,
      imageUrl: "https://i.ytimg.com/vi/eYvgFWEiNp8/hqdefault.jpg",
      videoUrl: "",
    },
  },
  {
    icon: <></>,
    style: "col-span-2",
    colorBanner: "bg-gradient-to-tl from-emerald-500 via-teal-500 to-cyan-500",
    title: "Shading",
    imageUrl:
      "https://helpx.adobe.com/content/dam/help/en/substance-3d/documentation/spdoc/files/197427725/197427724/1/1592477682070/header-shader.jpg.img.jpg",
    textColor: "text-teal-200",
    textColorLight: "text-teal-800",
    details: {
      title: "Shading",
      description: `Using shading, 3D graphic art uses light to interact with surfaces and produce visually appealing digital environments.
      By applying color, pattern, and lighting effects, shading simulates the complex dance between light and material, creating the illusion of depth, texture, and material properties.
      Shading techniques, such as the Phong or Blinn-Phong model, go beyond basic flat shading by calculating the color of each pixel based on  interpolation of vertex colors across the polygon.
      This allows reflections and highlights to be expressed, enhancing the level of realism in digital scenes.
      At its core, shading relies on specialized programs called shaders, which allow artists and developers to fine-tune the behavior of light on 3D surfaces.
      Whether creating immersive video game environments, cinematic animations, or architectural visualizations, mastering shading techniques is essential for digital artists looking to transform their creations.
      theirs into reality.
      Shading not only affects the final appearance of the 3D model, but also plays an important role in conveying the material properties that make the digital scene visually appealing and engaging.`,
      imageUrl:
        "https://docs.blender.org/manual/en/latest/_images/editors_shader-editor_main.png",
      videoUrl: "",
    },
  },
];

const sectionTexturingSoftware = [
  {
    icon: (
      <img
        src={SubstanceIcon}
        alt=""
        style={{
          height: "100%",
        }}
      />
    ),
    label: "",
    details: "",
    style: "hover:bg-red-500/80",
    url: "",
  },
  {
    icon: (
      <img
        src={ArmorPaintIcon}
        alt=""
        style={{
          height: "100%",
        }}
      />
    ),
    label: "",
    details: "",
    style: "hover:bg-purple-900/80",
    url: "",
  },
  {
    icon: (
      <img
        src={PhotoshopIcon}
        alt=""
        style={{
          height: "100%",
        }}
      />
    ),
    label: "",
    details: "",
    style: "hover:bg-blue-500/80",
    url: "",
  },
  {
    icon: (
      <img
        src={QuixelIcon}
        alt=""
        style={{
          height: "100%",
        }}
      />
    ),
    label: "",
    details: "",
    style: "hover:bg-red-600/80",
    url: "",
  },
  {
    icon: (
      <img
        src={ZbrushIcon}
        alt=""
        style={{
          height: "100%",
        }}
      />
    ),
    label: "",
    details: "",
    style: "hover:bg-orange-500/80",
    url: "",
  },
  {
    icon: (
      <img
        src={ThreeDCoatIcon}
        alt=""
        style={{
          height: "100%",
        }}
      />
    ),
    label: "",
    details: "",
    style: "hover:bg-cyan-500/80",
    url: "",
  },
];

// THERE IS NO DATA FOR SECTION 4 YET

// DATA FOR SECTION 5
const cameraSettings = [
  {
    label: "Focal length",
    style: "bg-red-600",
    details: {
      title: "Focal length",
      description: `In photography, focal length is the distance of the the lens to the 
        sensor sensor which determines the size and wideness of the image which is the angle
        of view. For example, fish eye lenses (ones that look very wide view of images) are 
        often 8mm to 10mm. That is why the larger the focal length is, the image seem to zoom.
        For example, fish eye / wide lenses = 6mm to 60mm, normal lenses = 40mm to 60mm, telephoto
        = 200mm to 300mm. Notice that as the focal length increases, the image zooms in as stated
        as zoom lenses as as 200 to 300 mm. TLDR; The greater the focal length the closer the image
        and the less the angle of view and vice versa for the lesser focal length.`,
      imageUrl:
        "https://www.adorama.com/alc/wp-content/uploads/2020/09/focal-length-angle-view.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Lens type",
    style: "bg-orange-600",
    details: {
      title: "Lens type",
      description: `In blender or in most 3d softwares, lens type is just a classification of lenses 
        for different views. The most common lens type in these softwares are the Orthographic, Panoramic and 
        Perspective view. Just for a gist, orthographic views does not have perspective distortions commonly
        used for CAD. Panoramic lenses on the other hand are commonly wide angle view, these are commonly used 
        for previews of a landscape or interiors. Last is the perspective lens which is the most common to use
        as there is perspective distortion and gives a realistic curvature and angles similar to the naked eye.`,
      imageUrl:
        "https://manual.keyshot.com/wp-content/uploads/2020/07/perspective_orthographic_ill.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Perspective",
    style: "bg-amber-600",
    details: {
      title: "Perspective",
      description: `Perspective refers to the spatial relationship between objects in a frame. A mouthful. But
        there's an easier way to explain this, hang on. As stated in the focal length sections, focal length
        affects and distorts the view angle, which explains how the image differs from small to larger focal
        lengths. Perspective is how we view things with depth, wideness, and from where do we see a scene.
        You could view things differently based on the height of where you are viewing an object from. Focal 
        length gives the effect of wideness and focus of that perspective in simple terms.`,
      imageUrl: "https://i.stack.imgur.com/MkZsN.gif",
      videoUrl: "",
    },
  },
  {
    label: "Orthographic",
    style: "bg-yellow-600",
    details: {
      title: "Orthographic",
      description: `If you've ever saw a CAD model or blueprints, notice the technical drawings incorporated
      with lines. Also known as multiviews. These types of projections most commonly does not have that perspective
      distortion that we can see in normal images or photos because lines are parallel in this projection. Compared
      to the perspective view that have curvatures when you draw a line. These are also views that are present
      in accurate representations of objects and without the presence of distortion. It is when we view from the top
      bottom, left or right, we have an exact fit without distortion of the sides that is why ortho views are most 
      common in computer aided design, engineering and architecture.`,
      imageUrl:
        "https://civilseek.com/wp-content/uploads/2018/12/orthographic-projection-drawing.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Panoramic",
    style: "bg-lime-600",
    details: {
      title: "Panoramic",
      description: `Have you ever see this option on your phone and tried it? It's almost the same in 3d softwares, 
        the only difference is that a vitrual scene is being captured inside the image. On the image on the left we 
        see the difference between normal view to panoramic projection. As to which there is a curvature on the image 
        captured. So basically, in panoramic views, the image is the only thing curved and not the scene that it is 
        capturing. These are commonly used in landscape, cityscape and other scenes that emphasizes the wideness or 
        scale of the subject matter. One thing to keep note is that it commonly has an aspect ratio of 2:1 or larger
        making the image at least twice as wide as it's height.`,
      imageUrl: `https://www.researchgate.net/profile/Dubravko-Miljkovic/publication/304080213/figure/fig11/AS:390368496504838@1470082510799/Normal-stretched-and-panoramic-view.png`,
      videoUrl: "",
    },
  },
  {
    label: "Depth of field",
    style: "bg-green-600",
    details: {
      title: "Depth of field (DOF)",
      description: `It's the distance between the nearest subject and the furthest. Depending on the value of DOF whatever that 
        is nearest in that value to the camera, that is what will have the sharp focus and will blur out the background. See the 
        image on the left, which has shallow depth of field. The focus of the camera is the first flower, and gives the blurry
        vibes of the what is at the background. This is due to the depth of field. In 3d softwares we can either turn this
        on or off depending what we are trying to achieve. On the other hand the, the image on the right has a DEEP DOF
        which we can see that the image is more sharp from the foreground up to its background. DOF is great especially
         when we want to give emphasis to a certain object inside of our scene.`,
      imageUrl: `https://photonify.com/wp-content/uploads/2019/02/depth-of-field-example-1.jpg`,
      videoUrl: "",
    },
  },
  {
    label: "F-stop",
    style: "bg-emerald-600",
    details: {
      title: "F-stop",
      description: `This is unit where aperture is measured or it could also be considered as the size of the aperture.It also 
        refers the ratio of the lens's focal length to its aperture diameter and it shows how much light is entering through the lens. As seen on the image on the left. the larger
        value of F stop the smaller the size or the smaller the light that passes through the hole, which in our case is the 
        hole of the lens. It is similar to our eyes when we are in the dark, it dilates. It is similar to the dilation of the pupils of 
        our eyes allowing more light to pass to be able to see a bit better in the dark.`,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aperture_diagram.svg/640px-Aperture_diagram.svg.png",
      videoUrl: "",
    },
  },
  {
    label: "Blades",
    style: "bg-teal-600",
    details: {
      title: "Blades",
      description: `Aperture blades are what determines the smoothness of the circle formed by the aperture. Take a look at the 
        image as you can see the more blades the more circular or smooth the circle is which gives off the bokeh effect in photos.
        Bokeh effect are the ones that you see in night photos with circle blurred lights. The more circular the opening of the 
        aperture, the more aesthetically pleasing the bokeh effect will be.`,
      imageUrl: `https://c8.alamy.com/comp/M1H9PK/closed-aperture-with-611-blades-and-different-styles-M1H9PK.jpg`,
      videoUrl: "",
    },
  },
  {
    label: "Exposure Triangle",
    style: "bg-cyan-600",
    details: {
      title: "Exposure triangle",
      description: `One of the most important concepts in photography that includes the aperture,
      shutter speed and the ISO. Now, how does this work? First we have to define what exposure is.
      Exposure is the amount of light that reaches the sensor or in simpler terms, what makes the 
      photo that we capture appear more lighter or darker. 
      
      But what about the exposure triangle? This triangle consists of the three variables mentioned
      that when one is changed the exposure changes. Each of these are explained in much more detail
      on other sections. Shutter speed refers to the amount of time the light hits the sensor. ISO
      is basically the sensitivity of the sensor to light, and also remember to be careful as grainy
      images will be the result depending on the exposure or amount of light present in the scene. Last
      is the Aperture, which is the size of the hole formed by the blades. The larger the opening, the
      more light that can come through the sensor. Notice that all of these are variables that allows 
      light to pass to the sensor. But aside from that, they also have specific purposes.
      through the sensor`,
      imageUrl:
        "https://photographylife.com/wp-content/uploads/2016/11/triangle-960x469.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Shutter speed",
    style: "bg-sky-600",
    details: {
      title: "Shutter speed",
      description: `Shutter speed is the measure of time that light is allowed to hit the sensor. 
        This is the time for how long the shutter is opened. The faster the shutter speed is, the less
        light will hit to the sensor and the captured image will be much darker. On the other hand, the
        slower shutter speed will allow more light to hit the digital sensor therefore making the image
        brighter as the exposure to light is exteneded. 
        
        Also, on the image, we can see that the faster the shutter speed is, the sharper the photo is and
        has much more focus on the subject. Very fast shutter speeds are mostly used for sports or subjects 
        that involves very fast motion like sports, racing or wildlife photos. Slower shutter speeds are 
        are more blurry as it loses more focus on the subject. And also to remember, the larger the f-stop
        (smaller circular hole of the blades), the faster shutter speed will be, and the smaller f-stop will
        make the shutter speed faster.`,
      imageUrl: `https://www.creativelive.com/blog/wp-content/uploads/2018/02/Shutter-Speed-Diagram_Owned.jpg`,
      videoUrl: "",
    },
  },
  {
    label: "Aperture",
    style: "bg-blue-600",
    details: {
      title: "Aperture",
      description: `The aperture is the size of the hole that the blades formed. It is commonly 
        measured in f-stops which is the f/# where the hashtag is the number. The smaller the f stop
        the larger the circular opening and allowing more light to pass through the sensor. The formula 
        for the f-stop is equal to the ratio of the focal length and the diameter of the circular hole.
        In the image shown, f/1.4 would result in an image that has more exposure as it allows more light
        to pass through the sensor due to a larger diamter of the circular hole. On the other hand, the 
        smaller the hole wihhc is the f/16 will allow less light to pass through making the image much more
        darker.`,
      imageUrl: `https://www.shutterbug.com/images/styles/600_wide/public/promof6517.png`,
      videoUrl: "",
    },
  },
  {
    label: "ISO",
    style: "bg-indigo-600",
    details: {
      title: "ISO ",
      description: `ISO stands for International Organization for Standardization that represents the 
        sensitivity to light as numerical value. It is the sensor sensitivity to light. As you can notice
        in the image, lower ISO scale will have these results, such as less sensitivity to light, will
        capture less light, needs more light needed for good exposure and will have less grain or noise.
        On the other hand the larger the ISO scale the more sensitive to light, will capture more light 
        less light needed for good exposure, and lastly it will have more noise and grain to the resulting 
        image. `,
      imageUrl:
        "https://www.photographer.org/wp-content/uploads/2018/07/iso-chart.jpg",
      videoUrl: "",
    },
  },
];

const renderingSettings = [
  {
    label: "Rendering Engine",
    style: "bg-red-600",
    details: {
      title: "Rendering engines",
      description: `Do you ever wonder how a 3d scene can spit out an image or 
        an animation to be exported with higher quality? Thanks to rendering engines
        the 3d softwares renders and applys greater detail to the output through
        mathematical computations such as light bounces, shadows and material renderings. 
        Most common to blender are 2 engines including the Eevee and Cycles. Eevee is 
        great for faster rendering at the cost of less photorealistic renders. This 
        engine gives real time previews great for animation and game development, as 
        well as quick prototyping of a 3d scene or project. Cycles, on the other hand,
        offers a photorealistic render due to its path-tracing engine technology which
        computes and simulates the behavior of light, and how would it affect a material
        or textures inside a scene. 
        
        In other 3d apps, there is Arnold for Autodesk Maya, physical renderer for
        Cinemea 4d and also Redshift which is also a great rendering engine, Also to mention
        Vray, Corona and Octane. All of these software's rendering engines have their own pros and cons. And of course it's up 
        to the user which to use depending on their goal and other factors such as time,
        budget and artist's familiarity with the software.`,
      imageUrl: `https://d1tq3fcx54x7ou.cloudfront.net/uploads/store/
        tenant_161/post/1616/image/large-50445cf01782499717d14967f67f6ca7.jpg`,
      videoUrl: "",
    },
  },
  {
    label: "Cycles",
    style: "bg-orange-600",
    details: {
      title: "Cycles",
      description: `Cycles is the Blender rendering equivalent of Superman. 
      Making your 3D scenes appear as realistic as feasible is the main goal. 
      Think of it as a very intelligent artist who pays close attention to 
      how light behaves in the actual world. It computes lighting effects, 
      reflections, and shadows, among other things, to give your photos and 
      animations a truly amazing appearance. Cycles uses path tracing technology
      favorable on Nvidia gpus utilizing the cuda cores and Optix tech for blazing 
      fast renders and sampling. Before, Cycles is significantly slower when gtx 
      is the only available options, but during the advent of the RTX cards uses 
      Ray tracing allowing for faster renders.

      Cycles is your go-to partner if you want to create objects in your Blender
       projects that appear just like the real thing, whether you're constructing 
       amazing buildings or exhibiting items. It's similar to having a magic wand
        that transforms your imaginative thoughts into incredibly cool and realistic images.`,
      imageUrl: `https://i.stack.imgur.com/1JqLt.jpg`,
      videoUrl: "",
    },
  },
  {
    label: "Eevee",
    style: "bg-amber-600",
    details: {
      title: "Eevee",
      description: `Blender's supercharged rendering engine, Eevee, is the speed demon 
       that instantly makes your 3D scenes come to life. In contrast to Cycles, which is
       more methodical, Eevee uses fast rasterization to quickly determine the colors and 
       shading of pixels. Whenever your goal is to have a quick prototype or render of the 
       scene or subject that you want, eevee is the first option to use it. The cons of the 
       Eevee is again, the lack of photorealism and accurate light bounces, that is why it 
       is great mostly for game-like styles. Don't get me wrong, eevee does not make 
       photorealism impossible, Cycles just have a much more accurate and realistic light bounces.
       Because it provides prompt satisfaction at the expense of some 
       photorealism, this real-time method is the preferred engine for artists and game 
       developers that need fast feedback while they're creating. 

      Think of Eevee as your Blender creative turbo boost; it doesn't worry about the 
      smallest details and only makes sure you can move quickly through your 3D world. 
      Eevee's agility allows you to quickly iterate on animations or create a digital 
      game wonderland without having to sacrifice your creative vision. It does this 
      without requiring much effort on your part.
    
    `,
      imageUrl: `https://www.cgchannel.com/wp-content/uploads/2017/03
        /170324_Blender28EeveeRenderer.jpg`,
      videoUrl: "",
    },
  },
  {
    label: "Sampling",
    style: "bg-yellow-500",
    details: {
      title: "",
      description: `Alright, so sampling in 3D graphics is equivalent to capturing a 
        large number of images to ensure that every detail appears exactly as intended. 
        Similar procedures apply in the 3D world, where the computer determines the number 
        of trials, or samples, required to determine the ideal lighting and color schemes 
        for every pixel. Generally speaking, taking more samples results in a smoother and
        cleaner image, but it also means the computer will need to work harder and take 
        longer to reach the desired result. And also bear in mind that the higher the sample,
        the less noise the output will be (refer to the image).

        It's similar to figuring out where to draw the line between getting an extremely 
        sharp picture and not having your computer freeze all the time. Hence, sampling 
        in the context of 3D graphics is all about ensuring that your digital scenes 
        appear fantastic without giving your machine a fit.`,
      imageUrl: `https://web.cs.wpi.edu/~emmanuel/courses/cs563/S07/projects/isexample.jpg`,
      videoUrl: "",
    },
  },
  {
    label: "Volumes",
    style: "bg-lime-600",
    details: {
      title: "Volumes",
      description: `The key component in 3D graphics that gives virtual environments a hint 
        of realism is volume. They function as a set of tools for creating realistic simulations 
        of materials such as fire, smoke, and clouds in three dimensions. By utilizing advanced 
        algorithms and methods such as voxel grids and mathematical functions, the computer 
        precisely computes the interactions between light and these materials, producing the 
        appearance of lifelike behavior. Most examples where volumes are used are creating scenes 
        where smoke simulations are used such as smokes from fire, clouds and other things that 
        could involve the use of cloud or smoke-like particles. 

        Imagine many volumes as the artists working behind the scenes to make sure your digital 
        works not only have a stunning appearance but also behave in a manner consistent with reality. 
        It's the magic that occurs when you want the computer-generated scenes to have the same 
        level of dynamism and immersion as the real-world natural wonders.`,
      imageUrl: `https://i.stack.imgur.com/hCJYd.png`,
      videoUrl: "",
    },
  },
  {
    label: "Motion blur",
    style: "bg-green-600",
    details: {
      title: `Motion blur`,
      description: `This kind of visual trickery mimics how objects naturally blur in motion, 
      much like a camera capturing a moving object in real life. The software calculates and 
      blends multiple sub-frames while the camera or objects move during the exposure time of the frame. 
      This method gives animated sequences a fluid, dynamic quality that turns them from a collection 
      of still images into an engrossing story with a realistic sense of motion and speed. This is 
      very similar to what you can see in real life and in photography. It gives a dynamic motion even for
      a still image that has a blur allowing expression of motion of the subject.

      Motion blur in 3D software is the cinematic element that gives authenticity and energy to the 
      storytelling, whether it's the quickness of a virtual race car or the graceful movements of 
      animated characters.
      `,
      imageUrl: `https://i0.wp.com/www.fxfx.net/wp-content/uploads/2010/02/motion_blur_effect_covwer1.jpg`,
      videoUrl: "",
    },
  },
  {
    label: "Transparency",
    style: "bg-emerald-600",
    details: {
      title: "Transparency",
      description: `Don't get it wrong with the transparency of the material. The transparency that this
        option indicates is the transparency of the world without the presence of the the HDRIs. Transparency 
        option allows the user to turn remove the alpha or the background but still retaining the light bounces 
        from the HDRI. This is very useful when we want to put scenes together such as photobashing without 
        further editing and masking it in a photo editing software. As you can see in the image, The background 
        is the only thing that was removed, but retaining the reflections and light to the model.`,
      imageUrl: "https://i.ytimg.com/vi/vPOVlHF6vlc/hqdefault.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Performance",
    style: "bg-teal-600",
    details: {
      title: "Performance",
      description: `Performance is a vast topic but I'll try to make it as simple as possible in the perspective
        of an artist. Performance being pertained here is the capability of your machine to render your frame at 
        a certain speed. Many factors/variables are affecting the speed of the render such as the poly count of 
        your scene. Remember that the more geometry the scene has, the computer computes it (ofc) giving more work
        to your hardware depending if you are using CPU or GPU render. Other gemotries inside the scene that could 
        be expensive to your machine are smoke simulations, volumetrics, very high sampling, hi-res model textures,
        and high resolution of the frame. Other rare factors for slow renders are too much light bounces, light 
        caustics, and too much volumetric objects inside a scene.
        
        Now, how are we able to have faster renders? Optimize your scene, as much as possible try to lessen the 
        poly count or geometry of the objects you have in a scene. Try importing models with less dense polycount,
        this will improve your render speed and viewport performance significantly. Next, Elimination of insignificant,
        which just simply means, Don't overcomplicate your scene. Don't put something in a virtual scene that would not
        be captured by the camera unless these are light sources or assets that would give shadows to your scene based
        on your desired output.`,
      imageUrl: "https://i.ytimg.com/vi/mIN9TrVEmQ8/maxresdefault.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Tile size",
    style: "bg-sky-600",
    details: {
      title: "Tile size",
      description: `Tiles refers to the blocks of pixels that a 3d software will render. Tile size refers to the size 
        of pixels that it would render progressively. For example, the tile size for the render is 64x64, that means a
        square with 64x64 pixels would be rendered progressively until the whole resolution of the image is achieved.
        I sometimes call this as painting/printing as it literally is printing the scene captured by your camera in a scene
        within a single frame. I would also like to note that tile size can also affect the render speeds, although there
        is an auto option. In some cases the smaller the tile size, the slower the rendering is, and vice versa for
        larger tile sizes which sometimes be faster for other gpu architectures. 
        
        Note: For cpu renders -> smaller tiles such as 32x32. For cpu renders -> larger tiles such as 256x256`,
      imageUrl:
        "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/8/2/f/82fe8f1c496eabd87b048470ef43ae330f7a94d3.jpeg",
      videoUrl: "",
    },
  },
  {
    label: "Light Baking",
    style: "bg-blue-600",
    details: {
      title: "Light Baking",
      description: `Light Baking in Blender is a clever technique that improves rendering efficiency, especially 
        beneficial for real-time applications such as games or interactive simulations. This process involves 
        precomputing and storing lighting information in the texture, thereby reducing the computational 
        load for calculating dynamic lighting in each image. To implement light baking, you start by ensuring 
        that your 3D model contains properly unpacked UVs, as the light details will be stored based on these 
        UV maps. Next, you create a new image texture that will act as a canvas to store persistent 
        lighting information. Once you have the UVs open and the texture ready, you drill down into the 
        Render tab of the Properties panel. In the Baking section, you choose the desired baking style 
        (like Diffuse or Combination) and choose the texture of the created image. Clicking the "Cook"
        button will start Blender's process of calculating and storing lighting details in the texture. 
        The final step is to apply this baked texture to your material, providing realistic lighting effects 
        without the need for constant real-time calculations during rendering. Light baking is a valuable 
        asset in Blender, especially for those creating interactive experiences or optimizing performance in 
        resource-intensive projects.`,
      imageUrl:
        "https://www.creativeshrimp.com/wp-content/uploads/2016/08/mushrooms_baked-e1470733214733.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Caustics",
    style: "bg-indigo-600",
    details: {
      title: "Light Caustics",
      description: `Caustics in the context of 3D graphics refers to complex light patterns created by the 
      reflection or refraction of light through transparent or reflective surfaces.
      These patterns often manifest as bright, concentrated areas of light, like shimmering reflections at 
      the bottom of a swimming pool, or complex light patterns on the  surface beneath a glass of water.
      Caustics play a key role in improving the realism of rendered scenes by simulating the complex interactions 
      of light rays with surfaces. In 3D software like Blender, achieving realistic caustic effects involves using 
      advanced rendering engines, such as Cycles. These engines simulate the behavior of light rays as they 
      interact with materials, especially transparent ones. Adjusting settings related to transparency, refraction, 
      and light source can affect the appearance and intensity of caustics in a scene.
      While calculating caustics can be computationally demanding, the image gain is significant, adding a 
      level of sophistication to the images and animations displayed by precisely capturing how to emit complex 
      light in a virtual environment.`,
      imageUrl:
        "https://i.pinimg.com/originals/e4/3a/1b/e43a1bc91dcfccf81a93f14e45c747f6.jpg",
      videoUrl: "",
    },
  },
];

const exportSettings = [
  {
    label: "Resolution",
    style: "bg-red-600",
    details: {
      title: "Resolution",
      description: `In Blender, image resolution is an important aspect that affects the visual quality of 
        rendered scenes. When setting up your project, you can set the resolution in the Render Properties tab, 
        specifying the width and height of the image in pixels. This choice has a profound impact on the level 
        of detail and clarity, with higher resolutions producing sharper images but potentially requiring more 
        computing resources and time when rendering. Flexibility extends to the Output Properties tab when 
        finalizing a project, allowing users to adjust the resolution of saved image or animation files.
        Whether optimizing  print, web, or video content, understanding and adjusting image resolution in Blender 
        are fundamental skills for achieving the desired visual impact in 3D projects.It provides the necessary 
        balance between detail and IT efficiency, ensuring that the end result meets the specific requirements of the project.
     
     `,
      imageUrl:
        "https://docs.blender.org/manual/en/latest/_images/render_output_properties_format_panel.png",
      videoUrl: "",
    },
  },
  {
    label: "Aspect Ratio",
    style: "bg-orange-600",
    details: {
      title: "Aspect ratio",
      description: `Aspect ratio in Blender is the main setting that determines the proportional relationship between the 
        width and height of the displayed image or  frame. It plays a vital role in creating the visual composition of your 
        scenes and ensuring that the end result appears as intended on various display media. In Blender, you can set the 
        aspect ratio in the Render Properties tab, where you separately set the width and height of the image.
        Maintaining correct proportions is essential to avoid distortion and maintain the desired visual aesthetic.
        For example, a common aspect ratio for widescreen monitors is 16:9, where for every 16 units of width there are 9 
        units of height. Blender offers users  the flexibility to choose  standard image formats or customize them based on 
        project-specific requirements. Understanding and adjusting scale in Blender helps achieve visually balanced and 
        aesthetically pleasing compositions in your 3D projects, whether  still  or animated.`,
      imageUrl:
        "https://insaneimpact.com/storage/2022/07/common-aspect-ratios-1.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Frames rate ",
    style: "bg-amber-600",
    details: {
      title: "Frame rate",
      description: `Frame rate in 3D software refers to the number of individual frames displayed per second in an 
        animation or video sequence. This setting is essential for determining  perceived motion and overall animation 
        smoothness in various 3D software applications. Users typically set the frame rate in the software settings, 
        specifying the number of frames displayed per second. Common frame rates, such as 24 frames per second (fps) 
        for filmmaking or 30 fps and 60 fps for standard video content, common across platforms Various 3D software platforms.
        Higher frame rates, like 120 fps or 240 fps, are often used for slow motion effects, adding a level of detail 
        and smoothness to motion. Choosing the right frame rate depends on the project requirements and the desired 
        visual effect. While higher frame rates can contribute to smoother motion, they can also require increased 
        computing resources and storage capacity. Understanding and adjusting  frame rates in 3D software is fundamental 
        to achieving the desired image quality and motion characteristics in animations in various applications.`,
      imageUrl:
        "https://themotiontree.com/wp-content/uploads/2022/10/Image-2.png",
      videoUrl: "",
    },
  },
  {
    label: "Image Format",
    style: "bg-yellow-600",
    details: {
      title: "Image format",
      description: `Image formats in 3D software include different file types used to store and display digital images.
        These formats serve different purposes,  from storing high-quality textures to saving the final rendered image or animation.
        3D software applications, including Blender, support a variety of image formats, each with its own benefits and use cases.
        Popular image formats include JPEG, which is suitable for compressed images with a trade-off in quality and file size, and PNG, 
        which is preferred for images that require transparency or lossless compression.lost data. TIFF is commonly used for 
        uncompressed high-quality images, while EXR is popular for displays because of its ability to store high dynamic range 
        (HDR) information. Understanding image formats is important for optimizing file size, maintaining image quality, and 
        ensuring compatibility with other software or platforms. When exporting images or textures to 3D software, users often 
        choose a format that suits their specific needs, balancing factors such as file size, transparency support, and compression requirements.`,
      imageUrl: "https://cdn.mos.cms.futurecdn.net/TdaG9Gex57AHnRZG79wYKT.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Color type",
    style: "bg-lime-600",
    details: {
      title: "Color type",
      description: `In the field of 3D software, color varieties play a central role in shaping the visual aesthetics of digital images.
        Color spaces, such as sRGB and Adobe RGB, define the spectrum and range of colors that an image can display, affecting how colors are 
        perceived on different devices. Choosing the right color space will ensure consistent color representation, whether the project 
        is designed for web display or professional print. Additionally, color modes such as RGB and CMYK determine how color 
        information is stored, with RGB commonly used for digital displays and CMYK for printing. Grayscale mode simplifies images 
        into shades of gray.Navigating these color types in 3D software, such as Blender, is important for artists and designers to 
        achieve accurate, visually appealing results throughout the creative process, from texturing to final rendering. Understanding color 
        types is not just a matter of technical considerations, but also a matter of preserving  artistic intent and ensuring  fidelity 
        in digital creations.Whether creating vibrant animations or preparing images for  printing, choices made in  color space and mode 
        in 3D software have a profound impact on the overall visual experience of the final result.`,
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:498/0*0V5-preFzDRbmj5O.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Metadata",
    style: "bg-emerald-600",
    details: {
      title: "Metadata",
      description: `In the context of 3D software, metadata refers to additional information embedded in digital files, providing details 
        about the file's content, creation, and properties. In the world of 3D graphics, metadata plays an important role in organizing, 
        recording, and managing digital assets. This information can include details such as  author, creation date, software used, 
        camera settings, and even licensing information.In 3D software applications such as Blender, users can often access and edit 
        metadata through file properties or content management tools. Proper use of metadata ensures effective project management, 
        facilitates collaboration among team members, and helps maintain a complete record of the creative process. This becomes 
        especially relevant when sharing or distributing 3D content because metadata provides valuable information about the origin 
        and specifications of the file, contributing to a streamlined workflow and more organized.`,
      imageUrl:
        "https://docs.blender.org/manual/en/latest/_images/render_output_properties_metadata_panel.png",
      videoUrl: "",
    },
  },
  {
    label: "Export specific post processing",
    style: "bg-teal-600",
    details: {
      title: "Post processing",
      description: `Post-processing in 3D graphics refers to the stage after rendering in which additional adjustments and enhancements 
        are applied to the final image or animation. This step is an integral part of fine-tuning image quality, correcting imperfections, 
        and adding artistic effects to the displayed result. Post-processing techniques are diverse and can be used to achieve a variety 
        of results, from color correction and sharpening to applying filters, depth of field effects, and composition. lump. In 3D software 
        like Blender, post-processing options are often available in the Compositor or Image Editor. Users can apply knobs or filters to 
        adjust brightness, contrast, and color balance, as well as add effects such as blooming or lens distortion. Post-processing is a 
        creative and iterative phase in which artists refine their work to achieve a polished and visually appealing result. It allows editing
        artifacts, adding stylistic elements, and  overall improving the visual impact of  rendered scenes.`,
      imageUrl: "https://i.ytimg.com/vi/GIKaRZV2O5Y/maxresdefault.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Compression",
    style: "bg-cyan-600",
    details: {
      title: "Compression",
      description: `Compression in the context of 3D graphics involves reducing the file size of digital content, such as images, 
        textures or animations, by using various algorithms to remove redundant data or not necessary. This reduction in file size 
        is especially important for optimizing storage space, speeding up data transfers, and improving  overall project efficiency. In 
        3D software applications, including Blender, users often encounter compression settings when exporting or saving files. Different 
        compression methods and formats are available, each with its own trade-off between file size and image quality. Popular compression 
        formats include JPEG, which uses lossy compression suitable for images, and PNG, which uses lossless compression and maintains image 
        quality but results in larger file sizes. Balancing the need for smaller file sizes while still maintaining visual fidelity is 
        important to consider when choosing compression settings in 3D graphics, as it directly affects asset management efficiency and 
        performance of applications or projects.`,
      imageUrl: "https://i.stack.imgur.com/pTYaH.png",
      videoUrl: "",
    },
  },
  {
    label: "Color Depth",
    style: "bg-sky-600",
    details: {
      title: "Color depth",
      description: `Color depth or bit depth is an important aspect of 3D graphics that determines the accuracy and richness of colors 
       in digital images. It quantifies the number of bits allocated to representing the color of each pixel, directly affecting potential 
       color variations. Common color depths include 8-bit, 16-bit, and 32-bit, each providing a distinct balance between the number of 
       colors and the precision of their representation. For example, 8-bit color depth provides 256 colors but can result in display 
       color banding, while 16-bit and 32-bit depth provide a wider range and greater precision, especially when attenuated. color reduction.
       In applications like Blender, artists and designers must consider the trade-off between color accuracy and file size efficiency 
       when choosing color depth during rendering or burn editing image. Higher color depths are more appropriate for tasks that require 
       the expression of rich hues, such as professional digital artwork or high-quality rendering, while lower color depths can may be
       suitable for situations where smaller file sizes are preferred, where a slightly reduced color gamut may be acceptable. Choosing 
       color depth is a nuanced decision that affects both visual fidelity as well as practical performance and storage considerations 
       in 3D graphics projects.`,
      imageUrl:
        "https://s3.amazonaws.com/cgcookie-rails/uploads%2F1509585522108-truck_bit-depth-channel.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Frame range",
    style: "bg-blue-600",
    details: {
      title: "Frame range",
      description: `In the context of 3D graphics,  frame range refers to the  sequence of frames specified in the animation 
        or displayed sequence. It determines the duration and scope of the animation, indicating which frames will be included 
        in the final output. Setting the frame range is important for defining the start and end points of the animation, allowing 
        artists to control the duration of their visual story. In 3D software such as Blender, the user can set the frame range 
        in the Timeline or Render Properties panel. This setting plays an important role in creating the animation correctly 
        because it dictates the sequence of frames that will make up the final moving image. Adjusting the frame range provides 
        flexibility, allowing artists to focus on specific parts of the animation, repeat sequences, or export only a subset of frames. 
        This is the basic parameter for timing control in the world of 3D graphics, providing creative freedom to fine-tune the timing 
        and duration of animation sequences.`,
      imageUrl:
        "https://docs.blender.org/manual/en/latest/_images/render_output_properties_frame_range_panel.png",
      videoUrl: "",
    },
  },
  {
    label: "Video Format",
    style: "bg-indigo-600",
    details: {
      title: "Video format",
      description: `In 3D graphics, a video format refers to a specific method of encoding and compressing a sequence of 
        images to create a digital video file. Video format plays an important role in determining factors such as size, 
        file  quality, and compatibility with different playback devices. Popular video formats include MP4, AVI, MOV, and 
        MKV, each with its own set of  algorithms and compression features. Choosing the appropriate video format in 3D software, 
        such as Blender, depends on the intended use and final distribution of the  video. MP4 is widely used for  streaming and 
        sharing because of its balance between quality and compression efficiency. AVI is a container format that can use different
        codecs, providing some flexibility but often resulting in larger file sizes. MOV is linked with Apple's QuickTime and 
        is compatible with  Mac and Windows platforms. MKV is famous for its high-quality compression,  suitable for archival 
        purposes or high-end video projects. Understanding video formats is essential for optimizing the image quality and compatibility
        of 3D animation or video rendering across a variety of platforms and applications.`,
      imageUrl: "https://i.stack.imgur.com/YKCPg.jpg",
      videoUrl: "",
    },
  },
];

const postprocessSetting = [
  {
    label: "Image filtering",
    style: "bg-red-600",
    details: {
      title: "Image filtering",
      description: `Both in 3D graphics and  image processing in general, image filtering is a fundamental technique used to 
        enhance, modify or refine image content. In  3D graphics, image filtering is often applied during post-processing to 
        refine the appearance of rendered scenes. This may involve techniques such as blurring, sharpening, or adding various 
        artistic effects to achieve a specific look or mood. Image filtering in 3D software, such as Blender, allows artists 
        to meticulously create the final result, correcting imperfections, emphasizing details or introducing nuances creative.
        On a broader scale, image filtering has many applications in general image processing for many different purposes.
        It is used in photography to improve image quality, reduce noise, or apply creative filters for artistic expression.
        In medical imaging, filters are applied to improve diagnostic clarity, while in video compression, filters help optimize 
        file size without affecting image quality. Whether in the context of 3D graphics or  image manipulation in general, image 
        filtering is a flexible tool that allows creators to refine and perfect visual content based on aesthetic, functional requirements.
        or specific technique.`,
      imageUrl:
        "https://images.summitmedia-digital.com/cosmo/images/how-tochoose-the-best-instagram-filter-main-image.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Color correction",
    style: "bg-orange-600",
    details: {
      title: "Color correction",
      description: `Lighting correction, both in  3D graphics and  image processing in general, refers to adjusting and 
        improving lighting conditions to achieve  desired visual results. In  3D graphics, lighting correction is an 
        important step in fine-tuning the look of rendered scenes.This process involves fine-tuning parameters such as brightness, 
        contrast and color balance to optimize lighting and the  overall visual impact of the digital environment. Artists use 
        lighting correction techniques in 3D software like Blender during post-processing to ensure scenes have the desired mood, 
        realism, or stylized aesthetic. In broader applications, lighting correction plays an important role in  image processing 
        in general, especially in photography and digital imaging. Photographers use tools like exposure compensation to balance 
        highlights and shadows, while color correction helps maintain accurate and realistic color representation. Lighting correction 
        in image processing is also essential in medical photography, satellite photography, and many other fields that require 
        accurate and consistent lighting conditions. Whether in the context of 3D graphics or general image editing, mastering 
        lighting editing techniques is essential to achieving accurate, visually impressive lighting results.`,
      imageUrl: `https://cdn.cp.adobe.io/content/2/rendition/5cfe0e57-ec42-4000-95e2-30ffe22b90a1/artwork/3e2d680b-3ac4-47ac-b7e4-7d8b8b2d2645/version/0/format/jpg/dimension/longest/size/2560`,
      videoUrl: "",
    },
  },
  {
    label: "Color grading",
    style: "bg-amber-600",
    details: {
      title: "Color grading",
      description: `Color grading is an essential process in both 3D graphics and  image or video production in general, involving 
        the adjustment and enhancement of colors to achieve a specific visual tone or mood. In 3D graphics, color grading is often 
        applied during post-processing to fine-tune the color palette of rendered scenes, emphasize certain colors, create a consistent 
        visual style, or evoke certain colors. specific emotions. Tools in software like Blender allow artists to manipulate  color 
        grading parameters, such as contrast, saturation, and color balance, to fine-tune the overall appearance of the final result.
        In addition to the field of 3D graphics, color grading is widely used in film, photography and video production. It serves 
        to establish a cohesive, cinematic atmosphere, correct color inconsistencies, and contribute to the story by influencing the 
        viewer's emotional response. Color grading can range from subtle adjustments to dramatic transformations, making it a powerful 
        tool for  creative expression and technical optimization. Whether creating visually stunning 3D animations or perfecting your 
        film's color storytelling, mastering the art of color grading is essential to achieving the desired visual impact.`,
      imageUrl:
        "https://s.studiobinder.com/wp-content/uploads/2019/01/What-is-Color-Correction-Color-Grading-Color-Correcting-Guide-Header-StudioBinder.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Photobashing",
    style: "bg-lime-600",
    details: {
      title: "Photobashing",
      description: `Photobashing is a technique used in both 3D graphics and digital art, in which existing photo elements are 
        combined or integrated to create  new and unique compositions. In  3D graphics, artists can use photobashing to quickly 
        create realistic textures, backgrounds, or elements for their scenes by blending or overlaying photos onto the 3D model.
        This technique allows for faster workflows and the incorporation of real-world details into digital compositions. In 
        addition to 3D graphics, photobashing is widely applied in digital illustration and concept art. Artists take advantage 
        of this method to speed up the creation of complex scenes or environments by combining photographs with hand-drawn elements.
        It allows for the incorporation of realistic textures, lighting, and details that could be difficult or time-consuming to 
        create manually. Photobashing is a versatile tool that provides a bridge between the digital and real worlds, allowing 
        artists to experiment with different visual elements and speed up the process of conceptualizing and visualizing their 
        creative ideas.`,
      imageUrl: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8eccb115-fdb3-4d95-9b2e-5653ada13056/d9ia4fb-f056e900-563a-41b9-8e60-47be16fd1619.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlY2NiMTE1LWZkYjMtNGQ5NS05YjJlLTU2NTNhZGExMzA1NlwvZDlpYTRmYi1mMDU2ZTkwMC01NjNhLTQxYjktOGU2MC00N2JlMTZmZDE2MTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5b199uEjgQoXcXvV1nBWefT30jPpw6PyRERFxAAzv3w`,
      videoUrl: "",
    },
  },
  {
    label: "Light painting",
    style: "bg-green-600",
    details: {
      title: "Light painting",
      description: `Light painting is a creative technique used in both 3D graphics and photography to create unique and visually 
        impressive images. In the context of 3D graphics, artists simulate light painting during the rendering process to improve the 
        lighting and mood of the scene. This involves strategically placing virtual light sources within a 3D environment to draw or
        highlight specific areas, creating vivid and captivating lighting effects. Light painting in 3D graphics is a versatile method 
        for achieving artistic and atmospheric lighting that adds a touch of magic to digital scenes. In traditional photography, light 
        painting involves physically moving a light source during a long exposure to create streaks or patterns of light in an image.
        This technique is often used to capture dynamic and dramatic effects in night photography or creative portraits. The principles 
        of light painting in photography and 3D graphics share the concept of using light as a paintbrush to sculpt and define  visual elements.
        Both methods provide artists with unique ways to experiment with light, yielding imaginative and visually appealing results.`,
      imageUrl: "https://i.stack.imgur.com/2U2tu.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Image Scaling",
    style: "bg-emerald-600",
    details: {
      title: "Image scaling",
      description: `Imagine you have this amazing 3D model for your project and now you need to make sure the textures fit perfectly.
        This is where image scaling comes in. It's like resizing a beautiful wallpaper to fit your room perfectly.
        In 3D graphics, we often use image scaling to adjust texture size  or adjust the resolution of the final render.
        It's like adjusting visual elements to make sure everything is sharp and fits perfectly into our virtual world.
        Nowadays, in everyday design or photo editing  work, scaling an image  is like magically changing the size.
        You want the great photo you take to look amazing on your website as well as on  Instagram. So you take your digital 
        scissors and resize them. But here's the trick: you don't want it to look  stretched  or pixelated. Image scaling ensures that 
        your images remain sharp and clear no matter where you use them. It's like having a personal photo assistant ensuring that your 
        images always have the best pixels forward, whether they're on a big screen or a small phone.`,
      imageUrl:
        "https://digital-photography-school.com/wp-content/uploads/2009/06/ps-before-after.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Cropping / Transforming",
    style: "bg-teal-600",
    details: {
      title: "Cropping / Transforming",
      description: `Cropping is a process in both 3D graphics and  image editing in general, in which part of an image is selected and the rest is discarded.
        In 3D graphics, cropping is relevant when rendering scenes or working with textures, allowing the user to focus on specific elements or compositions.
        In image editing,  a common method is to refine the image composition and remove unnecessary elements.
        Transform, on the other hand, involves changing the position, size, or orientation of an image or its components.
        In 3D graphics, transformations are an integral part of adjusting the position and characteristics of objects in a scene.
        In  image editing in general, transformations include actions such as scaling, rotating, and skewing, providing users with a variety of tools 
        to manipulate and enhance image elements according to  creative intent. Cropping and transformation are essential techniques for refining 
        and optimizing visual content in various digital applications.`,
      imageUrl: "https://i.ytimg.com/vi/1ARHWOrzGfw/maxresdefault.jpg",
      videoUrl: "",
    },
  },
  {
    label: "Retouching",
    style: "bg-sky-600",
    details: {
      title: "Retouching",
      description: `Photo retouching is the process of editing and enhancing images to improve  visual appeal, correct imperfections,
        and achieve  desired aesthetics. In the context of general image editing, retouching includes actions such as removing 
        imperfections, adjusting skin tones, and improving details to create a more polished and professional appearance. This process 
        is widely used in photography, digital art, and graphic design to create beautiful and sophisticated final images. In 3D graphics, 
        editing is applied to enhance rendered scenes, adjusting lighting, color, and detail to achieve a specific visual result. This can 
        include fine-tuning textures, fine-tuning shadows, and resolving artifacts or inconsistencies in the rendered image. In both fields, 
        retouching is a versatile tool for artists and photographers, allowing them to perfect their images, correct flaws and highlight 
        key elements, creating The final product is more attractive and refined.`,
      imageUrl:
        "https://webneel.com/daily/sites/default/files/images/daily/11-2012/photo-retouching-after-before%20(17).jpg",
      videoUrl: "",
    },
  },
  {
    label: "Photo manipulation",
    style: "bg-blue-600",
    details: {
      title: "Photo manipulation",
      description: `Photo manipulation is the process of modifying or enhancing a photograph using various  techniques and digital tools.
        This may involve changes to  composition, color palette, lighting, or adding/removing elements to create the desired visual effect.
        In general image editing, photo manipulation is often used for creative purposes, such as creating surreal or fantastical scenes, 
        compositing multiple images, or transforming the mood of a photo. In 3D graphics, image manipulation techniques are applied during 
        post-processing to enhance or modify rendered scenes. Artists can use these techniques to seamlessly integrate photographic elements  
        into  3D environments, creating a fusion of real-world and digitally created images. Image manipulation is a powerful tool for 
        storytelling, artistic expression, and refining the aesthetics of photos and 3D graphics, allowing creators to push the boundaries 
        of visual creativity.`,
      imageUrl: `https://webneel.com/daily/sites/default/files/images/daily/06-2020/10-photo-retouching-after-futuristic-neon-sci-fi-ufo
        -space-ship-alien-vitaliy-art.jpg`,
      videoUrl: "",
    },
  },
  {
    label: "AI enhancement",
    style: "bg-indigo-600",
    details: {
      title: "Ai enhancement",
      description: `AI enhancement, in the broader context of digital content, refers to the integration of artificial intelligence 
        algorithms to improve the quality and appearance of 3D graphics and images. In image editing, AI plays a transformative role by 
        automating enhancements such as color adjustment, sharpening, and recognition of specific elements for targeted enhancements.
        This streamlines the editing process, allowing photos to be tweaked efficiently and intelligently, making them more  pleasing 
        to the eye with minimal manual intervention. In the realm of 3D graphics, AI enhancement is leveraged for tasks such as denoising 
        rendered images and optimizing scenes. By learning from large data sets, AI algorithms can make informed decisions to reduce noise 
        in rendered scenes, improving overall image quality. Additionally, AI helps automate certain aspects of scene optimization, 
        providing a more streamlined and efficient workflow for 3D artists and designers. The integration of advanced AI  techniques 
        highlights the ever-evolving intersection between artificial intelligence and the creative process, providing powerful tools 
        to improve the visual aesthetics of technical content numbers, focusing on efficiency and precision.`,
      imageUrl:
        "https://plugins-media.makeupar.com/smb/blog/post/2023-05-12/274d41f0-10a2-416e-9954-2c28ea493d7a.jpg",
      videoUrl: "",
    },
  },
];

const sectionRendering = [
  {
    title: "Camera settings",
    description: `When you see these settings, and if you have photography knowledge, adjusting these settings would be easy. But be not afraid,
        we'll explain the concepts of photography that is most common. Not so detailed yet enough for you to get a grasp of how photography works.
        Being able to photograph your scene, models and along with your environment. Most common concepts to remember that helped me are the rule of thirds
        ,exposure triangle and perspective. And also remember to not overcomplicate your scene. Like dont put too much details that would just get blurred 
        by depth of field most of the time.`,
    style: "text-purple-400",
    settings: cameraSettings,
    reverse: "md:flex-row flex-col",
  },
  {
    title: "Rendering configuration",
    description: `Don't be confused by the buzzword above. It just simply means what settings are you going to use 
        for your render. The TLDR is these are the settings that you could do to either ramp up or decrease the quality of your render and what rendering 
        engines would be used to spit out that image. Click the buttons above to show specific information about the settings.`,
    style: "text-blue-400",
    settings: renderingSettings,
    reverse: "md:flex-row-reverse flex-col",
  },
  {
    title: "Export format",
    description: `Don't get confused with exporting a model from rendering a scene. When rendering a scene, most of the time
        we deal with images and videos. What I recommend for rendering images are PNGs. As they retain much more of information and it has support for 
        transparency/alpha channels. This will retain quality and lossless compression. For example you want to kitbash images and edit it inside photo 
        editing softwares such as photoshop. This will retain quality best for rasterized outputs.`,
    style: "text-yellow-400",
    settings: exportSettings,
    reverse: "md:flex-row flex-col",
  },
  {
    title: "Postprocessing",
    description: `Feeling like your render is bland? This is where postprocessing comes to the rescue. You want to add birds to your scene without modelling a bird?
      slap a bird png flying and adjust its transparency or blur it and now you have a dynamic shot of a scene. Adjusting contrast, brightness, colors and intensities of
      hues in the image can also be done through postprocessing.. Softwares such as photoshop or lightroom are good for postprocessing images, Premiere and davinci for video 
      formats. Postprocessing is a whole different other topic.`,
    style: "text-green-400",
    settings: postprocessSetting,
    reverse: "md:flex-row-reverse flex-col",
  },
];

export {
  sectionHero,
  sectionModelling,
  sectionModellingFileTypes,
  sectionModellingSoftwares,
  sectionModellingPrimitives,
  sectionModellingMeshStructure,
  sectionModellingTransformations,
  sectionModellingModifiers,
  sectionModellingSurfaceTypes,
  sectionModellingTopology,
  sectionModellingCAD,
  sectionTexturing,
  sectionTexturingSoftware,
  sectionRendering,
};
