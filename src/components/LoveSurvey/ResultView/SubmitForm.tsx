import { Button, TextField } from '@material-ui/core';
import clsx from 'clsx';
import React, { useCallback } from 'react';
import { useToggle } from 'react-use';
import type { AsyncState } from 'react-use/lib/useAsyncFn';

import { useStyles } from './ResultView.styles';

import { IS_DEV } from '~/config/browser';

export interface SubmitFormProps {
  className?: string;
  submitState: AsyncState<boolean>;
  onSubmit: (user: SubmitUser) => void;
}

export interface SubmitUser {
  name: string;
  email: string;
}

const SubmitFormBase: React.FC<SubmitFormProps> = (props) => {
  const classes = useStyles();
  const { submitState } = props;

  const [isOpened, toggleOpened] = useToggle(false);

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      if (!isOpened) {
        event.preventDefault();
        toggleOpened();
        return;
      }

      if (submitState.value) {
        toggleOpened();
      }
    },
    [isOpened, submitState],
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      const { elements } = event.target as HTMLFormElement;
      const nameInput = elements.namedItem('name') as HTMLInputElement;
      const emailInput = elements.namedItem('email') as HTMLInputElement;

      props.onSubmit({
        name: nameInput.value.trim() || 'Anonymous',
        email: emailInput.value.trim(),
      });
    },
    [props.onSubmit],
  );

  return (
    <form
      className={clsx(
        classes.submitForm,
        isOpened && classes.isFormOpened,
        submitState.value && classes.isSubmitDone,
        props.className,
      )}
      onSubmit={handleSubmit}
    >
      <div className={classes.inputsWrapper}>
        <TextField
          className={classes.formInput}
          label="Name"
          name="name"
          disabled={submitState.loading}
          defaultValue={IS_DEV ? 'Kate' : undefined}
        />
        <TextField
          className={classes.formInput}
          label="Email"
          name="email"
          type="email"
          required
          disabled={submitState.loading}
          defaultValue={IS_DEV ? 'kate.osten@gmail.com' : undefined}
        />
      </div>
      <Button
        className={classes.submitButton}
        variant={isOpened ? 'contained' : 'outlined'}
        tabIndex={0}
        onClick={handleClick}
        type={isOpened && !submitState.value ? 'submit' : 'button'}
        disabled={submitState.loading}
      >
        {submitState.loading ? (
          'Sending'
        ) : submitState.value ? (
          'Done'
        ) : (
          <>
            Sub<span className={classes.heartUnicode}>♡</span>it
          </>
        )}
      </Button>
    </form>
  );
};

export const SubmitForm = React.memo(SubmitFormBase);
