// const hex = (r,g,b) =>{
//     return '#' + ((1<<24) + (r<<16) + (g<<8) +b).toString(15).slice(1);
// };

// const rgb = (r,g,b) => {
//     return `rgb (${r}, ${g} ,${b})`;
// } ;


// function ConvertColor(r,g,b){
//     const color = {};
//     color.R = r;
//     color.G = g;
//     color.B = b;


//     color.rgb = function() {
//         return `rgb (${this.r}, ${this.g} ,${this.b})`;
//     };

//     color.hex = function(){
//         const {r,g,b} = this;
//         return '#' + ((1<<24) + (r<<16) + (g<<8) +b).toString(15).slice(1);
//     }

//     return color ;
// } 


// function color (r,g,b){
//     this.r =r;
//     this.g =g;
//     this.b =b;
// }

// color.prototype.rgb = function(){
    
//     const {r,g,b}=this;
//     return `rgb (${r}, ${g} ,${b})`;

// };

// color.prototype.hex = function(){
    
//     const {r,g,b}=this;
//     return '#' + ((1<<24) + (r<<16) + (g<<8) +b).toString(15).slice(1);
// };


// color.prototype.rgba = function (a = 1.0) {
// 	const { r, g, b } = this;
// 	return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// class color {
//     constructor (r,g,b,name){
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//         this.calcHSL();
//     }

//     innerRgb(){
//         const {r,g,b}=this;
//         return`${r}, ${g} ,${b}`
//     }


//     colorname(){
//         console.log("This color name " + this.name);
//     }


//     rgb(){
//         return `rgb(${this.innerRgb})`;
//     }

//     rgba(a=1.0){
//         return `rgba(${this.innerRgb()},${a})`;
//     }

//     hex(){
//         const {r,g,b}=this;
//          return '#' + ((1<<24) + (r<<16) + (g<<8) +b).toString(15).slice(1);
//     }


//     hsl(){
//         const {h,s,l} = this;
//         return`hsl (${h} , ${s} , ${l}%)`;
//     }

//     	fulllySaturated() {
// 		const { h, l } = this;
// 		return `hsl(${h},100%, ${l}%)`;
// 	}

// 	opposite() {
// 		const { h, s, l } = this;
// 		const newHue = (h + 180) % 360;
// 		return `hsl(${newHue},${s}%, ${l}%)`;
// 	}

//     	calcHSL() {
// 		let { r, g, b } = this;
// 		// Make r, g, and b fractions of 1
// 		r /= 255;
// 		g /= 255;
// 		b /= 255;

// 		// Find greatest and smallest channel values
// 		let cmin = Math.min(r, g, b),
// 			cmax = Math.max(r, g, b),
// 			delta = cmax - cmin,
// 			h = 0,
// 			s = 0,
// 			l = 0;
// 		if (delta == 0) h = 0;
// 		else if (cmax == r)
// 			// Red is max
// 			h = ((g - b) / delta) % 6;
// 		else if (cmax == g)
// 			// Green is max
// 			h = (b - r) / delta + 2;
// 		// Blue is max
// 		else h = (r - g) / delta + 4;

// 		h = Math.round(h * 60);

// 		// Make negative hues positive behind 360°
// 		if (h < 0) h += 360;
// 		// Calculate lightness
// 		l = (cmax + cmin) / 2;

// 		// Calculate saturation
// 		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

// 		// Multiply l and s by 100
// 		s = +(s * 100).toFixed(1);
// 		l = +(l * 100).toFixed(1);
// 		this.h = h;
// 		this.s = s;
// 		this.l = l;
// 	}
// }
  
// const skyColor = new color(185, 243, 252, 'Sky');

// new color();


class Peliharaan{ // parent class/Object
    constructor(name, age){
        console.log("Hello World")
        this.name = name;
        this.age = age;
    }
    
    makan(){
        return`${this.name} lagi makan`;
    }
}

class kucing extends Peliharaan{  // child class/Object
    constructor(name,age,lives){
        console.log("Hello World1");
        this.lives = lives;
        super(name,age);
    }
    Call(){
        return `Hello world`
    }
}


class Anjing extends Peliharaan {  // child class/Object
    manggil(){
        return`Halo kak`
    }
}

