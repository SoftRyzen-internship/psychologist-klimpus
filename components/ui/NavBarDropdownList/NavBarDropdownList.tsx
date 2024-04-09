import Link from 'next/link';

import jsonData from '@/data/common.json';

export const NavBarDropdownList = () => {
  const data = jsonData.DropdownList;

  return (
    <div className="w-[289px] rounded-b-[20px] bg-green-400 py-[16px]">
      <ul className="flex flex-col gap-[10px]">
        {data.map((item, index) => (
          <li
            key={index}
            className="rounded-[20px] hover:bg-yellow-200 focus:bg-yellow-200 active:bg-blue-200"
          >
            <Link href={`/${item.moveTo}`} className="">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
