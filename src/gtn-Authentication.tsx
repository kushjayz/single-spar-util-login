// Anything exported from this file is importable by other in-browser modules.
export enum UserTypes {
    Default = 'default',
    Admin = 'admin',
    FinanceUser = 'financeUser',
    Auditor = 'auditor'
}

export function login(userName: string, password: string) {
  alert('Utility Module Called!');
    if(userName === 'admin' && password === 'admin') {
        // Admin user && authenicate
  
        // updateUserLoginState(userName, password, UserTypes.Admin, true);
        return {
            isAuthenticated: true,
            usertype: UserTypes.Admin,
        }
      } else if (userName === 'financeUser' && password === 'financeUser') {
        // Finance user && authenicate
        
        // updateUserLoginState(userName, password, UserTypes.FinanceUser, true);
        return {
            isAuthenticated: true,
            usertype: UserTypes.FinanceUser,
        }
      } else if (userName === 'auditor' && password === 'auditor') {
        // Auditor && authenicate
  
        // updateUserLoginState(userName, password, UserTypes.Auditor, true);
        return {
            isAuthenticated: true,
            usertype: UserTypes.Auditor,
        }
      } else {
        return {
            isAuthenticated: false,
            usertype: UserTypes.Default,
        } 
      }
}

// function updateUserLoginState(username: string, password: string, type: UserTypes, isAuthenticated: boolean) {
//     this.setState({
//       user: {
//         type: type,
//         username: username,
//         password: password,
//         accessControls: this.getAccessControls(type),
//       },
//       isAuthenticated: isAuthenticated,
//     })
// }
