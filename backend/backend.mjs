import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// Films triés par date projection
export const getFilms = () => pb.collection('films').getFullList({ sort: 'date_projection' });

// Activités triées par date
export const getActivites = () => pb.collection('activites').getFullList({ sort: 'date' });

// Invités triés alphabétiquement
export const getInvites = () => pb.collection('invites').getFullList({ sort: 'nom' });

// Infos par ID
export const getFilmById = (id) => pb.collection('films').getOne(id);
export const getActiviteById = (id) => pb.collection('activites').getOne(id);
export const getInviteById = (id) => pb.collection('invites').getOne(id);

// Activités par animateur (id ou nom)
export const getActivitesByAnimateurId = (id) => pb.collection('activites').getFullList({
    filter: `id_invite="${id}"`,
    sort: 'date'
});

export const getActivitesByAnimateurNom = async (nom) => {
    const invite = await pb.collection('invites').getFirstListItem(`nom="${nom}"`);
    return getActivitesByAnimateurId(invite.id);
};

// Ajouter/Modifier élément
export const saveOrUpdate = (collection, data) => {
    return data.id
        ? pb.collection(collection).update(data.id, data)
        : pb.collection(collection).create(data);
};
