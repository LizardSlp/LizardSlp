function r_out01() {
	var b=[];
	b[0]='<b>[Аликормен. Факт]</b>. В Ярмейне, лояльном к Лаи-Лан-дэ свободном городе, почти совершили переворот власти, однако в последний момент положение спасли представители Дома Солнца и Триглавой гильдии. Что дальше предпримет Империя?';
b[1]='<b>[Аликормен. Факт]</b>. В Маэнлаге можно совершенно бесплатно взять в аренду гипхата, крылатого такого, рогатого и здоровенного волка. Если, конечно, вы ему понравитесь и он сам с вами пойдет.';
b[2]='<b>[Аликормен. Факт]</b>. Альдры умеют использовать собственные перья в качестве ножей. Выражение: "Перышко под ребрышко", - тут играет новыми красками, особенно для иноземцев.';
b[3]='<b>[Аликормен. Факт]</b>. Рин-на-син знают о приближении своей смерти и успевают тщательно к ней подготовиться, передав все необходимое своим ученикам и родственникам. Они в ответ готовят для ушедшего письма с пожеланием доброго пути, которые сжигаются во время ритуала прощания.';
b[4]='<b>[Аликормен. Факт]</b>. В Землях Юга есть кочевое племя, которое носит синие одежды и считается "ведающими". Они не поклоняются никому из богов.';
b[5]='<b>[Аликормен. Слух]</b>. Поговаривают, что Манси в прошлом году на празднике был в Элгране и оставил после себя магическую лиру.';
b[6]='<b>[Аликормен. Слух]</b>. В горах Дикого края разгуливает рыцарь со знаком солнца на груди. Как скоро его прикончат?';
b[7]='<b>[Аликормен. Слух]</b>. Во время переворота в Ярмейне точно видели культистов из Детей Сарьяни. Но вы слышали - среди них был сам полубог, сын Солнца, собственной персоной!';
b[8]='<b>[Аликормен. Слух]</b>. В Анделаге, далеко на юге, живут разумные Тени Хаоса. Кто проверит?';
b[9]='<b>[Тир ан Наире. Факт]</b>. Чаще всего в гостях, — больше в деревнях и маленьких городах —  вам обязательно подадут воду. Считается, что если у пришедшего злые намерения, он подавится водой при первом же глотке.';
b[10]='<b>[Тир ан Наире. Факт]</b>. Когда-то очень давно Великий космический кит, проплывающий мимо Тир ан Наире, задел часть земель плавником. Отсюда появился осколок Флаерелей.'; 
b[11]='<b>[Тир ан Наире. Слух]</b>. Говорят, что в Этерии кто-то придумал новое направление в музыке. Они называют это… джазом?'; 
b[12]='<b>[Тир ан Наире. Слух]</b>. Странно. Некоторые ученые загадочным образом стали исчезать. А некоторые — начали скрываться. С чем это может быть связано?'; 
b[13]='<b>[Тир на Наире. Слух]</b>. Кто-то сделал поджог церкви в Шаграре, в которой представлены все десять богов. Пожар удалось потушить, но церковь подлежит восстановлению. Кто-то из очевидцев говорит, что мельком видели на стенах надпись с одним единственным словом. "Лжецы".'; 
b[14]='<b>[Тир на Наире. Слух]</b>.  В Тиренской Империи обсуждается полный запрет использования магии в крупных городах.';
b[15]='<b>[Карманная библиотека. Факт]</b>. В библиотеке есть полное собрание рукописей Арвергора. Нет, не продается.';
b[16]='<b>[Корабль-город. Факт]</b>. Сдается каюта, одноместная, в хорошем состоянии, с видом на среднюю палубу. Обращаться к трактирщице Вялого жука.';
b[17]='<b>[Корабль-город. Факт]</b>. Дамы и господа! Малые и великие! Поспешите, поторопитесь, не медлите ни мгновения! В ваш славный Корабль-Город после долгих странствий и великих трудов, прибыл удивительный Театр Грёз! Вас ждут истории о доблести и предательстве, о любви, что горы свергает и о людских пороках, что страшнее чудовищ, которые в лесах обитают! Не упустите свой шанс увидеть то, о чем будут слагать легенды!';
		var i=Math.floor(Math.random()*b.length);
	document.write( b[i] );
}
