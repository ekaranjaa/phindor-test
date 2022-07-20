export default ({
  route,
  $auth,
  redirect
}) => {
  const accountVerified = $auth.user.email_verified

  if (accountVerified && route.name === 'verification') {
    return redirect('/')
  }

  if (!accountVerified) {
    if (route.name === 'verification') { return }
    return redirect('/verification')
  }
}
