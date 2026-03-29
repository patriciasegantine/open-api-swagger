import { type Static, Type } from '@sinclair/typebox';

export const UserSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
  name: Type.String({ maxLength: 100 }),
  email: Type.String({ format: 'email' }),
});

export type User = Static<typeof UserSchema>;
