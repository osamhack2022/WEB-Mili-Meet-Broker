import NextAuth, { NextAuthOptions } from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: 'frontend-client',
      clientSecret: process.env.KEYCLAOK_CLIENTSECRET ?? '',
      issuer: process.env.KEYCLOAK_ISSUER ?? 'https://osamhack2022-web-mili-meet-broker-7rrgrq5695q2pp9-8080.preview.app.github.dev/realms/mili-meet',
    })
  ]
}

export default NextAuth(authOptions);
