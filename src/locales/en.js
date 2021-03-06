export default {
  common: {
    confirm: 'Confirm',
    cancel: 'Cancel',
    copy: 'COPY',
    next: 'NEXT',
    question_mark: '? ',
    testnet: 'Testnet',
    mainnet: 'Ignition-Mainnet',
    menu: {
      create: 'Generate new Wallet',
      restore_from_mnemonic: 'Restore From Mnemonic',
      restore_from_wif: 'Restore From WIF',
      restore_from_mobile: 'Restore From Mobile Wallet',
      view: 'View Wallet Info',
      transactions: 'View Wallet Txs',
      safe_send: 'Safe Send',
      send: 'Send',
      request_payment: 'Request Payment',
      create_contract: 'Create Contract',
      send_to_contract: 'Send To Contract',
      call_contract: 'Call Contract',
      settings: 'Settings',
    },
    info: {
      address: 'Address',
      balance: 'Balance',
      unconfirmed_balance: 'Unconfirmed Balance',
      priv_key: 'Private Key',
    },
    notify: {
      success: 'Success',
      fail: 'Failed',
      copy: 'Copy',
      password: 'Password',
      is_required: 'is required',
      parse: 'Parse',
      file: 'File',
      password_is_not_same_as_the_old_one: 'Password is not same as the old one',
      mnemonics_are_not_same_as_the_words_should_remember: 'The mnemoincs are not same as the words you should remember',
      mnemonics_can_not_restore: 'Those mnemonics can not restore a wallet, please check and try again',
      address_is_not_same_as_the_old_one: 'This address is not same as the old one',
      from_address_is_not_same_as_the_wallet: 'The from address is not same as the wallet address',
      restore_wif_fail: 'Cannot restore a wallet from this WIF',
    },
    mode: {
      normal: 'Normal',
      offline: 'Offline',
    }
  },
  mnemonic: {
    input_words: 'Please input words',
    label: 'M'
  },
  password: {
    enter: 'Please enter you password',
    password: 'password',
  },
  file_reader: {
    upload: 'Upload',
  },
  safe_send: {
    title: 'Safe Send',
    from_address: 'From Address',
    to_address: 'To Address',
    amount: 'Amount',
    fee: 'Fee',
    info: 'You need two computers(one online and one offline) and a removeable storage device to finish a safe-send. If you follow the tips below, you will not take risk of leak your private key. For the offline computer, please in "Settings"-"Mode" choose "offline", and then restore your wallet.',
    info1_online: 'Please finish the form, then save the file and copy to the offline computer. And the finish step 2 on the offline computer',
    info1_offline: 'Please finish step 1 on the online computer and copy the file from online computer and then go to step 2',
    info2_online: 'Please finish this step on offline computer, and copy the file from offline computer and then go to step 3',
    info2_offline: 'Please upload the file copy from online computer, and finish the signature, and then save the file and copy back to online computer',
    info3_online: 'Please upload the file from the offline computer, and then finish the safe-send',
    info3_offline: 'Please finish this step on the online computer',
  },
  send: {
    send_tokens: 'Send tokens',
    enter_address: 'Please enter address again (Double check)',
    going_to_send: 'You are going to send ',
    to_address: 'to address ',
  },
  request_payment: {
    title: 'Request Payment',
  },
  create_contract: {
    title: 'Create Contract',
    confirm: 'Do you confirm to publish this contract?',
    compiler: 'Compiler',
  },
  send_to_contract: {
    title: 'Send To Contract',
    confirm: 'Do you confirm?',
  },
  call_contract: {
    title: 'Call Contract',
    result: 'Result',
  },
  create: {
    title: 'Generate new Wallet',
    remember: 'Please remember the following mnemonics',
    remembered: 'I have remembered all. Let\'s check',
  },
  restore: {
    title: 'Restore Wallet',
  },
  restore_wif: {
    title: 'Restore Wallet From WIF',
    priv_key: 'WIF',
  },
  restore_mobile: {
    title: 'Restore From Mobile Wallet',
  },
  view: {
    title: 'View Wallet Info',
  },
  view_tx: {
    title: 'View Wallet Txs',
    recent: 'Recent 10 txs',
    tx: 'Tx: ',
    mined_at: 'Mined at ',
    total_in: 'TOTAL IN: ',
    fee: 'FEE: ',
    total_out: 'TOTAL OUT: ',
  },
  config: {
    title: 'Settings',
    lan: 'Language',
    network: 'Network',
    mode: 'Mode',
  }
}
