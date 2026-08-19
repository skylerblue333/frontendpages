# ContentScheduler review

The `/content-scheduler` route currently presents a demo queue with scheduled and published posts, platform badges, future dates, views, engagement, and scheduling/deletion controls. It also implies publishing to ShadowChat, X, Instagram, and TikTok through a local queue.

The safe replacement should clearly label all items as local layout samples. It must not fabricate publication status, views, engagement, platform delivery, scheduled jobs, media uploads, creator identity, or deletion outcomes. A schedule form may collect a local draft preview, but scheduling and deleting must be no-ops with explicit unavailable status. Analytics must disclose that no verified event source is connected.
