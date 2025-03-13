import {
    getFilms,
    getActivites,
    getInvites,
    getFilmById,
    getActiviteById,
    getInviteById,
    getActivitesByAnimateurId,
    getActivitesByAnimateurNom,
    saveOrUpdate
} from './backend.mjs';

async function test() {
    console.log(await getFilms());
    console.log(await getActivites());
    console.log(await getInvites());

    console.log(await getFilmById('id_du_film'));
    console.log(await getActiviteById('id_activite'));
    console.log(await getInviteById('id_invite'));

    console.log(await getActivitesByAnimateurId('id_invite'));
    console.log(await getActivitesByAnimateurNom('NomAnimateur'));

    await saveOrUpdate('films', {
        titre: "Test Film",
        annee_sortie: 2024,
        genre: "Test",
    });
}

test(); 