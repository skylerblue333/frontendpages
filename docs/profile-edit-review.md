# ProfileEdit review

## Scope

The `/profile-edit` route currently edits display name, username, bio, location, social links, avatar/banner previews, and wallet address. It uses broad `any` casts, indicates auto-save behavior, reports persistence failures, supports local image previews, and directly requests MetaMask accounts from the browser provider.

## Risks identified

Profile fields are personal data and wallet addresses are sensitive financial identifiers. The current screen has no verified profile API, authenticated storage contract, upload validation pipeline, authorization policy, privacy retention rules, or wallet integration boundary. Direct browser-provider access and success messaging can imply account linkage or wallet connection without network, chain, origin, signing, or ownership verification.

## Safe upgrade boundary

Replace the editor with a strictly typed local profile draft. Keep non-sensitive form structure, field validation, and local preview interactions, but do not persist profile data, upload images, connect wallets, claim auto-save, or mutate account state. Explicitly mark persistence, image upload, wallet linking, and publication unavailable. All controls must report local no-op status.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and browser verification at `/profile-edit`. Verify wallet linking and profile-save actions are unavailable and no provider, storage, profile, or account operation starts.
