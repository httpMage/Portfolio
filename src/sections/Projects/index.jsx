import React from 'react';
import styles from './styles.module.scss';
import Project from '../../components/Project';
import Subtitle from '../../components/Subtitle';

export default function Index() {
  return (
    <section className={styles.projects}>
      <Subtitle anchor={"projects"} content={"Mes projets personnels"}/>
      <Project
        image='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
        title='test'
        description='my description'
        year={2023}
        tags={[
          {
            title: 'Test',
            link: 'test',
            icone:
              'data:image/png;base64,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',
          },
          {
            title: 'Test',
            icone:
              'data:image/png;base64,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',
          },
        ]}
        technologies={[
          {
            tech: 'react',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHYeKwC8HKySrTdBZ7z64eCuWxBSWJEDXds2uTKh-Tw&s',
          },
          {
            tech: 'react',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHYeKwC8HKySrTdBZ7z64eCuWxBSWJEDXds2uTKh-Tw&s',
          },
          {
            tech: 'react',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHYeKwC8HKySrTdBZ7z64eCuWxBSWJEDXds2uTKh-Tw&s',
          },
        ]}
      />
      <Project
        image='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
        title='test'
        description='my description'
        year={2023}
        tags={[
          {
            title: 'Test',
            link: 'test',
            icone:
              'data:image/png;base64,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',
          },
          {
            title: 'Test',
            icone:
              'data:image/png;base64,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',
          },
        ]}
        technologies={[
          {
            tech: 'react',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHYeKwC8HKySrTdBZ7z64eCuWxBSWJEDXds2uTKh-Tw&s',
          },
          {
            tech: 'react',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHYeKwC8HKySrTdBZ7z64eCuWxBSWJEDXds2uTKh-Tw&s',
          },
          {
            tech: 'react',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHYeKwC8HKySrTdBZ7z64eCuWxBSWJEDXds2uTKh-Tw&s',
          },
        ]}
      />
    </section>
  )
}