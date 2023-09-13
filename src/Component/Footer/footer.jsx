import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
    return (
        <div className="text-center pb-[20px]">

            <div className="mt-[20px] space-x-[20px]">
                <span><FacebookIcon /></span>
                <span><InstagramIcon /></span>
                <span><TwitterIcon /></span>
                <span><YouTubeIcon /></span>
            </div>
            <div className="mt-[10px] space-x-[20px] ">
                <span className="font-bold text-sm">Conditions of Use</span>
                <span className="font-bold text-sm">Privacy & Policy</span>
                <span className="font-bold text-sm">Press Room</span>
            </div>
            <p className ="mt-[8px text-md text-slate-900">&copy;MovieBox by Adriana Eka Prayudha</p>
            <h1 className ="mt-[8px text-md text-slate-900">Coded by Ifeoma Okpara Anumege</h1>
        </div>
    )
}

export default Footer;