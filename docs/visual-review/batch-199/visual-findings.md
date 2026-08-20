# Batch 199 Visual Findings

The representative `/profile` desktop capture presents a read-only profile shell and explicit profile-service-unavailable warning. Identity, posts, media, followers, relationships, wallet profile, publishing, and persistence are all shown as unavailable; the route does not fabricate a display name, username, biography, avatar, follower count, wallet profile, post identity, or social outcome.

The matching 390px mobile capture stacks the warning, unavailable identity panel, and disabled follow action cleanly. The local-only/read-only semantics remain readable, and the page is clearly not claiming an authenticated profile session or persisted social data.

Batch 199 evidence contains 20 desktop captures and 20 mobile captures. All 40 capture records have exit code 0 and all corresponding image files are present.
