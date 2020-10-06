import "./Faq.css";
import { Grid, Card, CardHeader, CardContent } from '@material-ui/core'
import React from "react";

const template = () => (
  <div className="faq">
    <Grid container spacing={3}>
      <Grid item md={12} >
        <Card>
          <CardHeader title='FAQ' />
          <CardContent>
            <h4 id="comment-le-score-est-calculé-">Comment le score est-il calculé ?</h4>
            <p>Le score est calculé à l’aide d’une version modifier de TrueSkill™. Comme TrueSkill™ la formule mathématique va chercher à calculer votre skill et lui donner en valeur et veiller à ce que cette valeur soit la plus proche possible de la réalité. De la formule va sortir deux valeurs: votre “skill” et la probabilité que la valeur de skill soit fausse. Appelez respectivement : <strong>μ</strong> (Mu) et <strong>σ</strong> (Sigma). Une fois que ces deux variables sont définies la formule suivante est appliquée pour calculer le score qui s’affiche à coté de votre pseudo et qui sert au classement :  <code>(μ - 3σ) * 100</code>.<br />
              Si vous souhaitez avoir plus d’informations voici des liens qui peuvent vous intéresser.<br />
              <a href="https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/">Page officiel de TrueSkill™ (Anglais)</a><br />
              <a href="http://www.moserware.com/2010/03/computing-your-skill.html">Vulgarisation de TrueSkill™ (Anglais)</a>
            </p>
            <h4 id="pourquoi-une-version-modifier-de-trueskill-">Pourquoi une version modifier de TrueSkill ?</h4>
            <ul>
              <li>Premièrement, car l’utilisation de TrueSkill™ est soumis à une licence</li>
              <li>Deuxièmement ,car TrueSkill™ ne prend pas en compte le score.</li>
            </ul>
            <p>L’alternative a donc été de choisir un algorithme similaire gérant les scores et libre de droits. <a href="http://users.cecs.anu.edu.au/~sguo/sbsl_ecml2012.pdf">Cet algorithme</a> a donc été choisi avec <a href="https://github.com/saulabs/trueskill">cette implementation</a></p>
            <h4 id="mon-score-monte-et-descend-de-manière-improbable-">Mon score monte et descend de manière improbable ?</h4>
            <p>Plusieurs cas possible :</p>
            <ul>
              <li>Il faut un minimum de 12 matchs à algorithme pour être assez sûr de votre skill</li>
              <li>Il se peut que votre score monte même si vous perdez face à un adversaire plus fort que vous car <strong>σ</strong> va baisser plus fort que <strong>μ</strong></li>
              <li>Il se peut que votre score descende même si vous perdez face à un adversaire plus fort que vous car <strong>μ</strong> va baisser plus fort que <strong>σ</strong></li>
            </ul>
            <h4 id="comment-sont-choisi-les-tournois-pour-le-power-ranking-national">Comment sont choisi les tournois pour le Power Ranking national</h4>
            <p>Les tournois un contre un  avec + de 64 participants avec un format en double élimination sont pris en compte. A l’exception des Weeklies.</p>
            <p>Pour le Ranking Nationnal un système de tier selon le nombre de participant est mis en place. Ce dernier a un impact sur le calcul du score.</p>
            <p>Tier B -&gt; Entre 64 et 95 Joueurs.  Vous recevez le credit de 100% de votre performance<br />
                Tier A -&gt; Entre 96 et 127 Joueurs. Vous recevez le credit de 120% de votre performance<br />
                  Tier S -&gt; 128 joueur et plus. Vous recevez le credit de 150% de votre performance</p>
            <h4 id="comment-sont-choisi-les-tournois-pour-le-power-ranking-regional">Comment sont choisi les tournois pour le Power Ranking regional</h4>
            <p>Les tournois un contre un  avec + 16 participants avec un format en double élimination sont pris en compte Weeklies inclues, tournois du PR national exclus.</p>
            <p>Aucun système de tier n’est mis en place. Vous recevez toujours 100% du credit de votre performance</p>
            <h4 id="un-bug-">Un Bug ?</h4>
            <p>Signalez le sur <a href="https://discord.gg/uHqvzBf">Discord</a><br />
                  Envoyez un DM a <a href="https://twitter.com/RankingSmash">@RankingSmash</a></p>
          </CardContent>
        </Card>
      </Grid>
    </Grid >
  </div >
);

export default template;
