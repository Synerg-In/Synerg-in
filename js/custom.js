jQuery(function ($){
    var data1 = '<h3>Le marché du lez</h3><p class="about-content-desc">Le Marché du Lez est devenu en quelques années «the place to be» à Montpellier. Un endroit alliant créativité, culture et plaisir… C’est ainsi en cohésion avec ce lieu que nous y avons installé nos locaux pour leur apporter une dimension encore plus complète de leur écosystème.</p>';
    var data2 = '<h3>Les halles du lez</h3><p class="about-content-desc">Les Halles du Lez, un des premiers « food court » à ouvrir ses portes en France. Un concept de renom où gastronomie, restauration rapide, convivialité et partage se rejoignent pour le bonheur de chacun, toutes générations confondues.</p>';
    var data3 = '<h3>Jaja la Fouine</h3><p class="about-content-desc">Jaja La Fouine se présente comme une boutique de seconde main, les deux fondatrices vous chinent elles-mêmes les meilleures pièces pour remplir vos placards d’une mode abordable, écoresponsable et surtout très fashion !</p>';
    var data4 = '<h3>Le Comptoir des Îles</h3><p class="about-content-desc">Le Comptoir des Îles vous embarque à bord d’un vol vers l’archipel des Mascareignes! Retrouvez ou découvrez la cuisine des îles préférées du globe comme l’Île Maurice, l’Île de la Réunion ou encore Madagascar. Les saveurs et le sourire des insulaires vous accueille au cœur des Halles du Lez.</p>';
    var datas = [data1,data2,data3,data4];
    var activeFade = new Boolean("false");

    $('img.about-button').each(function(index){
      $(this).on('click',function(event){
       event.preventDefault();
       event.stopPropagation();
        if(index ==0){
          $('#div1').hide();
          $('#div1').fadeIn(500).html(datas[index]);
        } else if (index ==1){
         $('#div1').hide();
         $('#div1').fadeIn(500).html(datas[index]);
        } else if (index ==2){
         $('#div1').hide();
         $('#div1').fadeIn(500).html(datas[index]);
        } else if (index ==3){
         $('#div1').hide();
         $('#div1').fadeIn(500).html(datas[index]);
        }
      });
    });
});
