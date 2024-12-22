export enum UserRole {
    admin = "admin",
    editor = "editor",
    guest = "guest",
}

type RoleDescription1 = Record<UserRole, string>;

const RoleDescription: RoleDescription1 = {
    admin: "Admin User",
    editor: "Editor User",
    guest: "Guest User",
};
console.log(RoleDescription);