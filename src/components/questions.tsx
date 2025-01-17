'use client';

import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { usePartitionKey } from './use-partition-key';

type QuestionsProps = {
  className?: string;
  title: string;
  questions: string[];
};

export const Questions = ({ title, questions, className }: QuestionsProps) => {
  const partitionKey = usePartitionKey();

  return (
    <div className={twMerge('flex flex-col ', className)}>
      <h1 className="pb-4 text-center text-base font-medium text-foreground">
        {title}
      </h1>
      <div className="flex flex-col items-center justify-center gap-2">
        {questions.map((question) => (
          <Link
            key={question}
            href={`/${partitionKey}/search?q=${question}`}
            className="cursor-pointer rounded-md border border-primary/20 bg-accent px-2 py-1 text-sm font-medium text-accent-foreground transition-colors duration-200 ease-in-out hover:bg-primary/20"
          >
            {question}
          </Link>
        ))}
      </div>
    </div>
  );
};

// export const QuestionsResult = () => {
//   const meta = useMeta();
//   const t = useTranslations();

//   if (!meta?.questions || meta.questions.length === 0) {
//     return null;
//   }

//   return (
//     <Questions title={t('search.followUp.title')} questions={meta.questions} />
//   );
// };
