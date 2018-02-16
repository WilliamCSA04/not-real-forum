export async function recentsDiscussions(){
    const response = await fetch('/discussions/recents');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};