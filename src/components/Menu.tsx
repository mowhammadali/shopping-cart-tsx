import React , { useContext } from 'react';
// mui
import { Menu as MenuWrapper , MenuItem } from '@mui/material';
// context
import { ThemeContext , InitialState , Action } from '../contexts/theme-context-provider';
// icons
import { FaCloudMoon } from 'react-icons/fa';
import { BsFillSunFill , BsFillMoonFill } from 'react-icons/bs';
import { RiComputerLine } from 'react-icons/ri';
// types
type ContextType = {
    state: InitialState;
    dispatch: React.Dispatch<Action>;
    colorScheme: string;
}

const Menu = (): JSX.Element => {
    const { state: { mode } , dispatch , colorScheme} = useContext<ContextType>(ThemeContext);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    // click handler
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    // close handler & mode handler
    const handleCloseAndHandleMode = (mode: 'light' | 'dark' | 'os') => {
        setAnchorEl(null);
        dispatch({type: mode});
    };

    return (
        <section>
            {
               mode === 'os'
               ?
               (
                    colorScheme === 'light'
                    ?
                    <button onClick={handleClick}>
                        <FaCloudMoon className='text-[1.6rem] sm:text-[2rem] cursor-pointer'/>
                    </button>
                    :
                    <button onClick={handleClick}>
                        <BsFillSunFill className='text-[1.6rem] sm:text-[2rem] cursor-pointer'/>
                    </button>
               )
               :
               (
                    mode === 'light'
                    ?
                    <button onClick={handleClick}>
                        <FaCloudMoon className='text-[1.6rem] sm:text-[2rem] cursor-pointer'/>
                    </button>
                    :
                    <button onClick={handleClick}>
                        <BsFillSunFill className='text-[1.6rem] sm:text-[2rem] cursor-pointer'/>
                    </button>
               )
            }
            <MenuWrapper
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={() => handleCloseAndHandleMode('light')}
                className={`${mode === 'light' && 'bg-slate-400'} flex items-center gap-x-2`}>
                    <BsFillSunFill className={`${mode === 'light' && 'text-emerald-600'}`}/>
                    Light
                </MenuItem>
                <MenuItem onClick={() => handleCloseAndHandleMode('dark')}
                className='flex items-center gap-x-2'>
                    <BsFillMoonFill className={`${mode === 'dark' && 'text-emerald-600'}`}/>
                    Dark
                </MenuItem>
                <MenuItem onClick={() => handleCloseAndHandleMode('os')}
                className='flex items-center gap-x-2'>
                    <RiComputerLine className={`${mode === 'os' && 'text-emerald-600'}`}/>
                    System
                </MenuItem>
            </MenuWrapper>
        </section>
    )
}

export default Menu;