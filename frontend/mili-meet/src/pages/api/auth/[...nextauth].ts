import NextAuth, { NextAuthOptions } from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: 'test-client',
      clientSecret: 'fWN1jJEore3LEUxzpekCedgUdf92PI9K',
      issuer: 'https://osamhack2022-web-mili-meet-broker-7rrgrq5695q2pp9-8080.preview.app.github.dev/realms/test',
    })
  ]
}

export default NextAuth(authOptions)
