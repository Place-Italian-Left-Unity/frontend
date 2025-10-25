import {useTranslations} from 'next-intl';

export default function ExampleClientComponent() {
  const t = useTranslations();
  
  return (
    <div className="bg-base-100">
      
      <p>test</p>
    </div>
  );
}
