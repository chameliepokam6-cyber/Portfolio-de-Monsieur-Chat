# TP GUIDÉ — FLEXBOX SUR MA PAGE PERSONNELLE
**Semaine 5 · Développement Web · Bachelor 1 · Green Up Academy**

---

## Contenu de ce dossier

```
tp-flexbox-s5/
├── index.html    ← La page HTML (structure déjà faite)
├── style.css     ← Les styles CSS (à compléter !)
└── CONSIGNES.md  ← Ce fichier
```

---

## Comment démarrer

1. Ouvre le dossier `tp-flexbox-s5/` dans **VS Code**
2. Ouvre `index.html` dans ton navigateur (**Live Server** ou clic droit → Ouvrir avec)
3. Ouvre `style.css` dans VS Code
4. Cherche les commentaires `TODO EXERCICE` dans le CSS
5. Complète les propriétés manquantes et observe le résultat en direct !

---

## Les 4 exercices

### Exercice 1 — Navigation horizontale *(15 min)*
**Où ?** → `style.css`, section `4. NAVIGATION`, règle `nav ul`

**Objectif :** Les liens de navigation doivent s'afficher côte à côte (en ligne) au lieu de s'empiler verticalement.

**Avant :**
```
• À propos
• Compétences
• Parcours
• Contact
```

**Après :**
```
À propos    Compétences    Parcours    Contact
```

**Propriétés à ajouter :**
- `display: flex`
- `flex-direction: row`
- `gap: 10px` *(ajuste la valeur à ton goût)*

---

### Exercice 2 — Grille de compétences *(20 min)*
**Où ?** → `style.css`, section `6. SECTION COMPÉTENCES`, règles `.grille-competences` et `.card-competence`

**Objectif :** Les 6 cards de compétences doivent s'afficher sur **3 colonnes** et revenir à la ligne automatiquement.

**Avant :**
```
[Card 1]
[Card 2]
[Card 3]
...
```

**Après :**
```
[Card 1]  [Card 2]  [Card 3]
[Card 4]  [Card 5]  [Card 6]
```

**Propriétés à ajouter sur `.grille-competences` :**
- `display: flex`
- `flex-wrap: wrap`
- `gap: 20px`
- `justify-content: center`

**Propriétés à ajouter sur `.card-competence` :**
- `flex: 1 1 calc(33% - 20px)`
- `min-width: 220px`

---

### Exercice 3 — Header : logo gauche / nav droite *(20 min)*
**Où ?** → `style.css`, section `3. HEADER`, règle `header`

**Objectif :** Le logo (h1 + tagline) doit se placer à **gauche** et la navigation à **droite**, le tout aligné verticalement au centre.

**Avant :**
```
┌─────────────────────────────────┐
│     Prénom NOM                  │
│     Développeur Web Junior      │
│     À propos  Compétences  ...  │
└─────────────────────────────────┘
```

**Après :**
```
┌─────────────────────────────────────────────────────┐
│  Prénom NOM                 À propos  Compétences   │
│  Développeur Web Junior     Parcours  Contact       │
└─────────────────────────────────────────────────────┘
```

**Propriétés à ajouter sur `header` :**
- `display: flex`
- `flex-direction: row`
- `justify-content: space-between`
- `align-items: center`

---

### Exercice 4 — Centrage parfait du hero *(15 min)*
**Où ?** → `style.css`, section `5. SECTION HERO`, règle `.section-hero`

**Objectif :** Le contenu de la section à propos (photo + texte) doit être **centré** horizontalement et verticalement dans une zone qui occupe 80% de la hauteur de l'écran.

**Avant :** Photo et texte collés en haut à gauche

**Après :** Photo et texte centrés, côte à côte, au milieu de l'écran

**Propriétés à ajouter sur `.section-hero` :**
- `display: flex`
- `flex-direction: row` *(photo et texte côte à côte)*
- `justify-content: center`
- `align-items: center`
- `gap: 50px`

> 💡 **Note :** `min-height: 80vh` est déjà écrit pour toi — c'est ce qui donne la hauteur à la section.

---

## Checklist finale

Avant de passer au Vendredi (Responsive Design), vérifie :

- [ ] La navigation est **horizontale** dans le header
- [ ] Les compétences sont en **grille de 3 colonnes**
- [ ] Le header est en **deux colonnes** (logo gauche / nav droite)
- [ ] La section hero est **centrée** (H + V) avec la photo à côté du texte
- [ ] Aucun élément ne **déborde** hors de l'écran
- [ ] La page est **cohérente visuellement** dans son ensemble

---

## Rappel rapide Flexbox

| Propriété | Valeur | Effet |
|-----------|--------|-------|
| `display` | `flex` | Active Flexbox sur le container |
| `flex-direction` | `row` / `column` | Direction des items |
| `justify-content` | `center` / `space-between` / `flex-start` | Alignement axe principal |
| `align-items` | `center` / `flex-start` / `flex-end` | Alignement axe transversal |
| `flex-wrap` | `wrap` / `nowrap` | Retour à la ligne |
| `gap` | `20px` | Espace entre les items |
| `flex` | `1 1 calc(33% - 20px)` | Taille des items (raccourci) |

---

## 🏆 BONUS — Si tu as terminé !

Tout est dans la section `10. ZONE BONUS` de `style.css` :

- **Bonus 1 :** Style actif sur les liens de navigation
- **Bonus 2 :** Footer en Flexbox (copyright à gauche / lien à droite)
- **Bonus 3 :** Section parcours centrée avec largeur maximale

---

*Bon courage ! .*
