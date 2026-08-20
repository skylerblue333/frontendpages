const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/TaskList.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst TaskList = () => (\n  <FeatureUnavailable\n    title="Task management unavailable"\n    description="A production task list requires authenticated ownership, durable storage, authorization, validation, ordering, completion semantics, collaboration rules, notifications, audit history, and conflict handling. No task, assignee, priority, completion, reminder, or synchronization result is created here."\n    capability="Task creation, assignment, tracking, and collaboration"\n    nextStep="Connect governed task storage, identity, authorization, notification, and audit services before enabling task management"\n  />\n);\n\nexport default TaskList;\n`);
console.log(JSON.stringify({ changed: ['TaskList.tsx'] }, null, 2));
