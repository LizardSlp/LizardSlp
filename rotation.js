function r_out01() {
	var b=[];
b[0]='трусы, мечи, полурослики';
b[1]='шкелеты, собаки, канарейка';
b[2]='бесплатные путевки на морские курорты Талассеи';
		var i=Math.floor(Math.random()*b.length);
	document.write( b[i] );
}
