var studys = angular.module("studys",[]);

studys.controller("controlador", function($scope){
	var random = function(){
		return 0.5 - Math.random();
	}
	
	var lista = this;
	lista.cuentas = [
		
		{cuenta:"vaalestudy", carrera:"TERAPIA OCUPACIONAL", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/73475359_519245162265219_5930201464600264704_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=-tKfEU2kb3IAX-58qRM&oh=48ca2cecfdad7f85e695292e8048d74c&oe=5EA629C5"},
		{cuenta:"nb09_notes", carrera:"PREPARATORIA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/78801205_788840574918483_3548396830565859328_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=ELjCrI6kb0wAX8iSe29&oh=970609f7b7d2546f2f06840700d960e7&oe=5E9CBBF5"},
		{cuenta:"studygram.unm", carrera:"LIC. CONTADOR PUBLICO", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/88224801_253736435621015_7187827734943367168_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=243ePK-fH1YAX9aXgLu&oh=dd7f30d1a1743caf128bfcfd9cb5cbc4&oe=5EA0E5FD"},
		{cuenta:"study_lic", carrera:"LIC. QUIMICA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/82467604_1007960616255168_7657315476267073536_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=leFMiJrHbM4AX8gZGUn&oh=6c7c81939c920c533842d3f5ce8e1a88&oe=5EA411D4"},
		{cuenta:"study_dis", carrera:"DISEÑO DE IMAGEN Y SONIDO", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/70900343_454441381867071_1236096947907985408_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=26O87XFSA9IAX94GnnV&oh=b281856242ef78810da11371d354bdcb&oe=5E9B51D8"},
		{cuenta:"studyenproceso", carrera:"LIC. DERECHO", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/80037251_3016331205124619_1153978122396237824_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=dxkVttNs0DcAX_vYIqN&oh=f34756385621c569c5f1911dbe37eddd&oe=5EA29537"},
		{cuenta:"studygramunahur", carrera:"LIC. ENFERMERIA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/78709074_2611846862434998_5839427734526230528_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=FjsMpiDULrsAX_HWTNu&oh=3a4bbd8d8bbd9121b70461ed5bb49a9f&oe=5EA3F670"},
		{cuenta:"studypochi", carrera:"MEDICINA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/89357551_633897087395841_1096042174669127680_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=LIfwecEh_2UAX81jUww&oh=9b8357f4577af8c493da4ec9315fd0a7&oe=5EA56A5C"},
		{cuenta:"study_withnotes", carrera:"SECUNDARIO", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/81281330_110271400421496_5181225615616901120_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=ezbSHY1ij0YAX_0VAC_&oh=65f53ff2fee515b987be31c43c264d2e&oe=5EA50899"},
		{cuenta:"studykinesiouba", carrera:"LIC. KINESIOLOGIA Y FISIATRIA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/76799758_466482014013695_8177341702625820672_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=FAGedaH7eQ0AX9hvEoF&oh=76bc8afd22cbf3178e89534d1b723b2f&oe=5E9FA537"},
		{cuenta:"stu_dyagus", carrera:"PROF EDUCACION INICIAL", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/82320896_463442914320441_6469347918993162240_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=tMC5iXIkF8gAX9PhhV_&oh=563629bf9f1b35f22b65c7083598c713&oe=5E9DFBD2"},
		{cuenta:"_studysmile", carrera:"MEDICINA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/79172409_2514069235527816_5205219879912734720_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=4KS3erhL9aQAX_NSNlG&oh=e658f5a9fd9e89260a9b55a6100b2348&oe=5EA65E23"},
		{cuenta:"studyyagro", carrera:"ING. AGRONOMICA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/81471700_139284463728600_3756351205643649024_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=dftM0OyWNVQAX_P821P&oh=f7444b8e5133437cbd19f555d9d9fb52&oe=5E9E5FA3"},
		{cuenta:"study.pluton", carrera:"SECUNDARIO", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/82993871_2663683147082893_7495846949573099520_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=caYZYYaob_oAX9FgQ3U&oh=bbbd9bb1768c2ea4987ec05607e05bc8&oe=5E9CB1CD"},
		{cuenta:"studyingunlam", carrera:"ING. INFORMATICA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/80364581_882676045484054_1289489395761545216_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=uPKFOkA6ULwAX8xNktj&oh=f1d874e931acb75be290a45b16a1e200&oe=5EA06296"},
		{cuenta:"study.ingenieria", carrera:"ING. INDUSTRIAL", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/83970964_1078141512519705_5745334853725847552_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=T2yrrmJC2AAAX-ColgF&oh=fb5577190be38378913771038716af95&oe=5E9AAFA0"},
		{cuenta:"study.nahir", carrera:"PROF CS. DE LA EDUCACION", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/88795761_140577713896099_219171863287300096_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=broYLtHgN70AX8DdaRl&oh=c902e7e865252eb9e29d6b6425ed9a7d&oe=5EA5DBA3"},
		{cuenta:"study.ham.girl", carrera:"LIC. CIENCIAS ECONOMICAS", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/76876303_1483667441783770_6791764448114638848_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=2Tjdj_mIvhkAX8vD5P8&oh=c019b0ecbc6fef9365f676f9c7d1d449&oe=5EA23F94"},
		{cuenta:"aylenzone", carrera:"PROF. EDUCACION ESPECIAL", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/81973958_541213866494931_4236420028397780992_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=Rb-fV4Doov4AX9yRGr3&oh=1c8d7b921c4bfc754507b35afaa6c56f&oe=5E9C9295"},
		{cuenta:"study.mmel", carrera:"TRADUCTORADO PUBLICO", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/73012922_470581676974616_7628977174673883136_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=aIG_IX-cYikAX_5QEKe&oh=bebc1026da77eacc65885ee05e60d202&oe=5E9EEEB2"},
		{cuenta:"studypsygram", carrera:"PSICOLOGIA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/88310955_543202723212615_1772620165125505024_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=_1Uh1AzsIi4AX-Ilg-U&oh=78a1572824869cfa1c6c3d5b7c6d68c4&oe=5E9DD58A"},
		{cuenta:"argentina.notess", carrera:"SECUNDARIA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/87560531_2259545934348752_7460859609108971520_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=TA4KJoSCL78AX8RQvcn&oh=7ae2e858277a998b7005baf0fa6b2024&oe=5E9A82FC"},
		{cuenta:"electrostudygram", carrera:"ING. ELECTRONICA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/83093611_244369503228984_1918509316428529664_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=tODq5otYTiQAX9_1X2d&oh=05a4361fc76f9cf9b79e38f26ab88d1b&oe=5EA66F15"},
		{cuenta:"belara.study", carrera:"LIC. PSICOLOGIA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/81437225_832576113831490_268704879298478080_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=Vk5zIs7sfycAX-iCAe8&oh=4adb8a0054e30f50d6ea3c5cbedd226f&oe=5EA5C1F5"},
		{cuenta:"leydepastel", carrera:"ABOGACIA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/84288648_186304812677087_7730527347060768768_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=0qPTDIKYMkkAX_apFaf&oh=b0acaad059ec85ae5abd7164b5cfc8d2&oe=5EA76664"},
		{cuenta:"study.with.lud", carrera:"PROF INGLES", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/79901731_1484415211717718_3778929444991795200_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=bP5azAPsKsYAX9aFw2Q&oh=1038cc49e594162f8f8091a62bc02d87&oe=5EA62A6C"},
		{cuenta:"perdidaenffyb", carrera:"BIOQUIMICA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/84013848_1074122099605492_8103746222533115904_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=fnE7MOMzGjIAX9hbDBh&oh=21dfa8a13f18f5603204781545bb629a&oe=5E9D4148"},
		{cuenta:"otrapam", carrera:"PROF. TEATRO", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/84555463_190608202008464_2309535603051462656_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=m1fg4oSAC_kAX_fWK9V&oh=896f15ea73cfc65a89ada0397fceb4b6&oe=5E9DDFB7"},
		{cuenta:"studypsicomaca", carrera:"LIC. PSICOLOGIA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/82700764_1013812885666935_2385030227488145408_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=7DdDDeC9ovcAX9ja7QJ&oh=907814f5d75ca91dd2bf46712ac618e6&oe=5EA55D4D"},
		{cuenta:"study.with.lud", carrera:"PROF. INGLES", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/79901731_1484415211717718_3778929444991795200_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=bP5azAPsKsYAX9aFw2Q&oh=1038cc49e594162f8f8091a62bc02d87&oe=5EA62A6C"},
		{cuenta:"paloenfmed", carrera:"MEDICINA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/84469627_712744945925965_3557177225482600448_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=urib2jIRgqcAX-QXZi4&oh=1e7bef028f864c60af1e516eca0f8a68&oe=5EA2CDE0"},
		{cuenta:"filosofia_noctua", carrera:"FILOSOFIA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/81572390_2856369791312793_3068864062679941120_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=ku8CpeqiCX4AX-gzqbx&oh=403c66fd8ce1ee57ca576a9093e9abd4&oe=5EA14A55"},
		{cuenta:"studygram.nurse.uba", carrera:"ENFERMERIA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/84696829_1848891308576648_5094229047286693888_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=Xl18_tXfeF8AX8g2vcO&oh=0809ed434f609e8e8751f6eea650f49e&oe=5EA1FA64"},
		{cuenta:"study_gaia", carrera:"LIC. GEOLOGIA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/73010660_598739967362912_6290947389972807680_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=hqd72217_cUAX-ePzw7&oh=420bf740c77b6b336c4f3deb31926bb0&oe=5E9C48D7"},
		{cuenta:"mi.cbc.medicina", carrera:"MEDICINA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/82435101_2720526344699398_7431101090680012800_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=jRNZfNC6Zx8AX9C028A&oh=6ddf51a1cbb8554b48641f5430035b29&oe=5EA24F3E"},
		{cuenta:"studyiq_", carrera:"TEC. INSTRUMENTACION QUIRURGICA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/87238878_2672242682889188_163214430899798016_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=5B7TZlZ-PuQAX_Gp6YF&oh=46770e3265aa7dcc3f1bb91f818cc080&oe=5EA2883F"},
		{cuenta:"profedprimaria.ro", carrera:"PROF. EDUCACION PRIMARIA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/87677704_2941086006117849_8917399069198909440_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=GQs8wDvyll8AX8dNhVC&oh=275c683239eb324f8d6656f084a5e1f1&oe=5E9E8037"},
		{cuenta:"study_med_fuba", carrera:"MEDICINA", id:0.5 - Math.random(), img:"https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/83205362_508773339752104_3552836585504374784_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=FZwDsJ8VWd8AX8CwdLB&oh=ef7c385bcbf455fc96c3fca101c17ac1&oe=5E9D4FA4"},
		
		
		
		
		
	
	];
	
});