import React from 'react';
import Button from '../buttons/Button';

const Section1 = ({ userPermission }) => {
  return userPermission ? (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis veritatis
        optio fuga ex! Officiis laborum inventore aspernatur dolore, quod
        excepturi ad, itaque id at optio repellat velit hic numquam ipsa!
        Accusantium saepe amet, molestiae quaerat quos voluptates blanditiis
        nesciunt doloribus nostrum dolor beatae nobis, distinctio necessitatibus
        temporibus iusto obcaecati sit asperiores quae illum similique dolorem
        repudiandae eaque? Laudantium, fuga tempore. Enim, at. Similique
        molestiae iusto deleniti harum in enim, magnam ab saepe ad esse
        perspiciatis quae dolorem, cupiditate molestias delectus amet explicabo
        aliquam? Molestiae beatae iusto voluptatem quisquam voluptate sit?
        Quisquam blanditiis sint nostrum cumque error laborum, possimus neque
        obcaecati vel soluta voluptatum cupiditate suscipit quos reiciendis
        saepe nulla non, distinctio exercitationem beatae natus. Atque tempora
        neque officia voluptatem iure? Quas libero repudiandae doloremque? Fuga
        deserunt atque sit architecto voluptatum ipsum ad sunt. Ut atque error
        eveniet inventore, voluptate natus soluta consequatur id. Dignissimos
        est dolor voluptatibus ut laborum. Assumenda?
      </p>
      <Button
        userPermission={userPermission}
        buttonText={'SECTION BUTTON'}
        backgroundColor={'yellow'}
        textColor={'black'}
      />
    </>
  ) : null;
};

export default Section1;
