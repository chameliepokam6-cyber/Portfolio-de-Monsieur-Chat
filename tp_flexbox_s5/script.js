/script.js - Monsieur Chat//
//Exercice 1 - verification du chargement du script//
console.log("Mon script est bien lié à ma page");

//Exercice 2 - Variables et fonctions
//TODO 2.1 - Declaration des constantes de ma page
const prenom = "Brunelle";
const nom = "POKAM";
const promotion = "Bachelor 1";
const ecole = "Green Up Academy";
const annee = 2026;
//TODO 2.2 - Declaration du tableau
const competences = [
    "HTML5",
    "CSS3",
    "Flexbox",
    "Responsive Design",
    "Javascript",
]

//TODO 2.3 - Creation de la fonction getNomComplet()

function getNomComplet(){
    return prenom + " " + nom;

}

//TODO 2.4 - Affiche le message bienvenu

function afficherBienvenue(){
    const msg = `Bienvenue sur le portfolio de ${getNomComplet()}`;
    console.log(msg);
    console.log(`Promo : ${promotion} - ${ecole} ${annee}`);
}
 
//TODO 2.5 - lister les competences

function listerCompetences()
{
    console.log("Mes compétences de codeur" );
    for (const c of competences) {
        console.log("Check =>" + c);
    }

}

//TODO 2.6 - appeler les deux fonctions

afficherBienvenue();
listerCompetences();

//Exercice 3 - Bouton Toggle sur les competences

//TODO 3.1 - fait dans le html

//TODO 3.2 - implementation du toggle

//variable qui suit l´etat

let competencesVisibles = true;

function toggleCompetences()
{
    //---on cible uniquement la grille interne pour masquer/afficher les cards
    //sans cacher pour autat tout le bloc #competences (si non le bouton)
    // 
    
    const grille = document.querySelector('#competences .grille-competences');
    const button = document.getElementById('btn-competences');
    if (!grille || !button)
        {
            console.warm(" Grille de competences introuvable ou bouton introuvable" );
            return;
        }
    if(competencesVisibles)
    {
        
        grille.style.display = 'none'
        button.textContent = 'Afficher les Compétences';
        competencesVisibles = false;

    }
     else
        {
            grille.style.display = 'flex';
             button.textContent = 'Masquer les compétences';
             competencesVisibles = true;
            
        }
      console.log("Compétences visibles : " , competencesVisibles);
    
}

//Exercice 4 - validation du formulaire
//TODO 4-1 - fait dans la balise form du html

//TODO 4.2 - ECRIRE LA FONCTION validerFormulaire

function validerFormulaire(){
    //Récupère les valeurs des champs
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    //verifie que nom n´est pas pas vide


    //on collecte toutes les erreurs avant d´alerter

    const error = [];
    if(nom =" "){
        //alert("Merci de saisir votre nom.");
        //return false; //Bloque l´envoi
        error.push(" Le nom est obligatoire");
    }

    //verifie que email n´est pas vide

    if(email === " " || !email.include("@")){
        //alert("Merci de saisir votre adresse email");
        //return false 
        error.push(" Une adresse email valide est requise (avec @)");
    }

    //vérifie que message a au moins 10 caractères

    if(message.lenght<10){
        //alert(" Votre message doit faire au moins dix caractères");
        //return false;  
        error.push(" Message trop court:" + message.length + " 10 Caractères");  
    }

    if(error.length>0){
        alert(" Merci de corriger les erreurs suivantes: \n\n" + error.join(" \n"));
        return false
    }

    //tout est ok
    console.log(" Formulaire valide! Envoi en cours");
    console.log({nom,email,message});
    return true; //<- Autorise l´envoi
}

