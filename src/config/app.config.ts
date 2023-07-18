interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Account Owner'],
  customerRoles: ['Guest User'],
  tenantRoles: ['Family Member', 'Account Owner', 'Admin'],
  tenantName: 'Subscriber',
  applicationName: 'My PhotoSharing',
  addOns: ['notifications', 'chat', 'file'],
};
