import avatar from '../../public/avatar.png';

export default function Nav() {
  return (
    <nav>
      <h1 className='text-3xl font-bold'>Logo</h1>
      <img src={avatar.src} alt='avatar' />
    </nav>
  );
}
