# neurogine-core-network

## Tech Stack
- React Native
- TypeScript
- Yarn

## Folder Structure
```
neurogine-core-network/
├── src/
│   ├── Api/
│   ├── Query/
│   └── Store/
│   └── Types/
├── package.json
└── tsconfig.json
```

## How to Use
```typescript
import { useQuery } from '@neurogine/core-network/Query';

const { data } = useQuery({
    queryKey: ['users'],
    queryFn: () => api.users.get(),
});
``` 